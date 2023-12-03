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

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function ChatScreen({ navigation, route }) {
  const [message, setMessage] = useState("");
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const [userInChat, setUserInChat] = useState({
    name: "Nine Tailed Fox",
  });

  const [messages, setMessages] = useState([
    { text: "Lorem ipsum dolor sit amet", isMe: true, timestamp: new Date() },
    {
      text: "Lorem ipsum dolor sit amet too!",
      isMe: false,
      timestamp: new Date(),
    },
  ]);

  const handleSendButton = () => {
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
  };

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

  return (
    <View
      style={[
        styles.container,
        isKeyboardOpen && Platform.OS === "android"
          ? { marginBottom: 0 }
          : undefined,
      ]}
    >
      <View style={styles.appbar}>
        <Appbar.BackAction
          color={Colors.primary600}
          size={32}
          onPress={() => navigation.navigate("MatchScreen")}
        />
        <Text style={styles.username}>{userInChat.name}</Text>
        <Avatar.Image size={48} source={{}} style={styles.avatar} />
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
    marginBottom: 65, // Adjust this value based on your design
  },
  appbar: {
    marginTop: screenHeight * 0.04,
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
    backgroundColor: "#209de0", // İstediğiniz renge göre değiştirin
    borderRadius: 17, // Yarıçapı genişliğinin yarısı kadar yapın
    alignItems: "center",
    justifyContent: "center",
  },
});
