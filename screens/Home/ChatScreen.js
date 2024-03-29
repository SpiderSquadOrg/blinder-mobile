import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../../constansts/Colors";
import { Appbar, Avatar } from "react-native-paper";
import ChatDialog from "../../containers/Chat/ChatDialog";
import BetterInputField from "../../components/ui/BetterInputField";
import { Ionicons } from "@expo/vector-icons";
import fetchMessages from "../../api/chat/fetchMessages";
import sendMessage from "../../api/chat/sendMessage";
import { useUser } from "../../contexts/UserContext";
import { CHAT_API } from "@env";

import io from "socket.io-client";
import { useActiveChat } from "../../contexts/ActiveChatContext";
import getUserByUserName from "../../api/chat/getUserByUsername";
import env from "../../constansts/env_variables";
import image from "../../assets/unknown_user.jpg";
import getUserBasic from "../../api/user/getUserBasic";
import getRemainingTime from "../../api/user/getRemainingTime";

let activeChatCompare;

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function ChatScreen({ navigation, route }) {
  const { user } = useUser();
  const [message, setMessage] = useState("");
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [userInChat, setUserInChat] = useState(route.params.chat.user);
  const [messages, setMessages] = useState([]);

  const [socket, setSocket] = useState(null);
  const { activeChat, setActiveChat } = useActiveChat();
  const [chatUserId, setChatUserId] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);
  const [prevActiveChatId, setPrevActiveChatId] = useState(null);
  const [typing, setTyping] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [remainigTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const newSocket = io(env.CHAT_API);
    setSocket(newSocket);

    return () => newSocket.close();
  }, [setSocket]);

  useEffect(() => {
    if (!socket) return;

    getUserId(user.username).then((userId) => {
      setChatUserId(userId);
    });

    if (user && chatUserId) {
      socket.emit("setup", { _id: chatUserId });
      socket.on("connected", () => {
        setSocketConnected(true);
      });
    }
  }, [user, chatUserId, socket]);

  useEffect(() => {
    if (!socket) return;

    if (route.params.chat.id !== -1 || activeChat._id !== -1) {
      socket.emit("join chat", activeChat._id);
      setPrevActiveChatId(activeChat._id);
    }

    if (prevActiveChatId && prevActiveChatId !== -1) {
      socket.emit("leave chat", prevActiveChatId);
    }

    activeChatCompare = activeChat;
  }, [activeChat, socket]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMessages(route.params.chat.id);

      const newMessages = data?.map((message) => ({
        id: message._id,
        text: message.content,
        isMe: message.sender.username == user.username,
        timestamp: message.createdAt,
      }));

      setMessages(newMessages);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!socket) return;
    if (user) {
      socket.on("typing", () => {
        setIsTyping(true);
      });
      socket.on("stop typing", () => {
        setIsTyping(false);
      });
    }
  }, [user, socket]);

  useEffect(() => {
    if (!socket) return;
    if (socket) {
      socket.on("message received", (newMessage) => {
        if (
          !activeChatCompare ||
          activeChatCompare._id !== newMessage.chat._id
        ) {
          //setNotifications([...notifications, newMessage]);
        } else {
          let correctMessageFormat = {
            id: newMessage._id,
            text: newMessage.content,
            isMe: newMessage.sender.username == user.username,
            timestamp: new Date(),
          };
          setMessages([...messages, correctMessageFormat]);
        }
        //fetchChats();
      });
    }
  });

  useEffect(() => {
    //console.log(isTyping + " " + user.username);
  }, [isTyping]);

  useEffect(() => {
    if (activeChat._id !== -route.params.chat.id) {
      setActiveChat({ _id: route.params.chat.id });
    }
  }, [route.params.chat.id]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsKeyboardOpen(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardOpen(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const getUserId = async (username) => {
    let tempUser = await getUserByUserName(username);
    return tempUser._id;
  };

  function onChangeInput() {
    if (!socketConnected) {
      return;
    }

    if (!typing) {
      setTyping(true);
      socket.emit("typing", activeChat._id);
    }

    let lastTypingTime = new Date().getTime();
    let timerLength = 3000;
    setTimeout(() => {
      let timeNow = new Date().getTime();
      let timeDiff = timeNow - lastTypingTime;

      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", activeChat._id);
        setTyping(false);
      }
    }, timerLength);
  }

  const handleSendButton = async () => {
    socket.emit("stop typing", activeChat._id);
    const trimmedMessage = message.replace(/^\n+|\n+$/g, "").trim();

    if (!trimmedMessage) {
      return;
    }

    const newMessage = {
      text: trimmedMessage,
      isMe: true,
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessage("");

    let data = await sendMessage(route.params.chat.id, trimmedMessage);
    socket.emit("new message", data);
  };

  const goBackAction = () => {
    navigation.navigate("ChatScreen");
  };

  useEffect(() => {
    if (!userInChat) return;
    if (userInChat.nickname) return;
    getUserBasic(userInChat.name).then((data) => {
      setUserInChat({ ...userInChat, nickname: data.nickname });
    });
  }, [userInChat]);

  const updateRemainingTime = async () => {
    getRemainingTime(activeChat._id).then((data) => {
      setRemainingTime(data);
    });
  };

  useEffect(() => {
    updateRemainingTime();
  }, [activeChat]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime();
    }, 60000); // 60000 milliseconds = 1 minute

    // Clear interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <View style={[styles.container]}>
      <View style={styles.appbar}>
        <Appbar.BackAction
          color={Colors.primary600}
          size={32}
          onPress={goBackAction}
        />
        <View >
          <Text style={styles.username}>{userInChat?.nickname}</Text>
          <Text style={styles.remainingTime}>
            {remainigTime.days} days, {remainigTime.hours} hours,{" "}
            {remainigTime.minutes} minutes
          </Text>
        </View>
        <Avatar.Image size={40} source={image} style={styles.avatar} />
      </View>
      <View style={styles.chatDialog}>
        <ChatDialog messages={messages} />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={[
          styles.keyboardAvoidingContainer,
          message.includes("\n") ? { marginTop: 20 } : undefined,
        ]}
      >
        <View style={styles.inputContainer}>
          <BetterInputField
            placeholder="Type a message"
            text={message}
            setText={setMessage}
            style={{ flex: 1 }}
            onChange={onChangeInput}
          />
          {message.length > 0 ? (
            <TouchableOpacity
              onPress={handleSendButton}
              style={styles.sendButton}
            >
              <View style={styles.roundButton}>
                <Ionicons name="ios-send" size={17} color="white" />
              </View>
            </TouchableOpacity>
          ) : (
            ""
          )}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  appbar: {
    marginTop: screenHeight * 0.06,
    marginBottom: screenHeight * 0.02,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  avatar: {
    marginRight: 10,
  },
  username: {
    textAlign: "center",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 30,
  },
  keyboardAvoidingContainer: {
    width: "100%",
  },
  chatDialog: {
    flex: 1,
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  sendButton: {
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  roundButton: {
    width: 34,
    height: 34,
    backgroundColor: "#209de0",
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },
});
