import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Avatar } from "react-native-paper";
import fetchChats from "../../api/chat/fetchChats";
import { useUser } from "../../contexts/UserContext";
import io from "socket.io-client";
import env from "../../constansts/env_variables";
import getUserByUserName from "../../api/chat/getUserByUsername";
import accessChats from "../../api/chat/accessChats";
import getPossibleMatchesByStatus from "../../api/possibleMatches/getPossibleMatchesByStatus";

function Chats({ navigation, route }) {
  const { user } = useUser();
  const [chats, setChats] = useState([]);
  const [socket, setSocket] = useState(null);
  const [chatUserId, setChatUserId] = useState(null);
  const [currentMatchedUser, setCurrentMatchedUser] = useState(null);

  useEffect(() => {
    getPossibleMatchesByStatus("MATCHED")
      .then((res) => {
        setCurrentMatchedUser(res[0].to);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
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
    }
  }, [user, chatUserId, socket]);

  const getUserId = async (username) => {
    let tempUser = await getUserByUserName(username);
    return tempUser._id;
  };

  const fetchData = async () => {
    if (currentMatchedUser) {
      await accessChats(currentMatchedUser.username);
    }

    const data = await fetchChats();
    const newChats = data?.map((chat) => ({
      id: chat._id,
      user: {
        name: chat.users.filter((u) => u.username !== user.username)[0]
          .username,
      },
      lastMessage: {
        text: chat?.latestMessage?.content ? chat?.latestMessage.content : "",
        timestamp: chat?.latestMessage?.updatedAt
          ? chat?.latestMessage?.updatedAt
          : "",
        isMe: chat?.latestMessage?.sender?.username === user.username,
      },
    }));

    if (currentMatchedUser) {
      newChats = newChats.filter(chat => chat.user.name === currentMatchedUser.username);
    }

    setChats(newChats);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", fetchData);
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (!socket) return;

    socket.on("message received", (newMessage) => {
      fetchData();
    });
  }, [socket]);

  const onPressChatHandler = (chat) => {
    navigation.navigate("ChattingScreen", { chat });
  };

  function formatTimestamp(timestamp) {
    if (!timestamp) {
      return "";
    }
    const date = new Date(timestamp);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.chatItem}
        onPress={() => onPressChatHandler(item)}
        activeOpacity={0.8}
      >
        <Avatar.Image size={52} source={{}} style={styles.avatar} />
        <View>
          <Text style={styles.userName}>{item.user.name}</Text>
          <View style={styles.lastMessageContiner}>
            <Text style={{ fontWeight: "500" }}>
              {item.lastMessage.isMe ? "Siz: " : ""}
            </Text>
            <Text
              style={styles.lastMessage}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.lastMessage.text}
            </Text>
            <Text style={styles.lastMessageTimestamp}>
              {formatTimestamp(item.lastMessage.timestamp)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  chatItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    minWidth: "100%",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  lastMessageContiner: {
    flexDirection: "row",
    alignItems: "center",
    minWidth: "80%",
  },
  lastMessage: {
    fontSize: 14,
    color: "#666",
    flex: 1, // Bu, lastMessage'ın tüm mevcut alanı doldurmasını sağlar
    marginRight: 10, // Sağdaki saatle arasında biraz boşluk bırakır
  },
  lastMessageTimestamp: {
    alignSelf: "flex-end", // Bu, lastMessageTimestamp'ın sağda sabit kalmasını sağlar
  },
  avatar: {
    marginRight: 16,
  },
});

export default Chats;
