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
import {
  storeData,
  getData,
  removeData,
  clearAllData,
} from "../../utils/storage";

function Chats({ navigation, route }) {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    storeData(
      "token",
      "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoibm9ybWFsIiwidXNlcklkIjoiM2Y1MDEyOWQtMTQ4Yy00ZDZjLTg3MDAtNzU3MTViNWM4NDM4IiwiZW1haWwiOiJhc2Rhc2FhYWFhQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoibmluZSB0YWlsZWQgZm94Iiwic3ViIjoibmluZSB0YWlsZWQgZm94IiwiaWF0IjoxNzAxOTA3MzEwLCJleHAiOjE3MDE5OTM3MTB9.x0jNCS1bDHbXnL8dVuqfMMSirNtDPo5vvXhld7dD4zM"
    );

    const fetchData = async () => {
      const data = await fetchChats();

      const newChats = data?.map((chat) => ({
        id: chat._id,
        user: {
          name: chat.users[1].username,
        },
        lastMessage: {
          text: chat?.latestMessage.content ? chat?.latestMessage.content : "",
          timestamp: chat?.latestMessage.updatedAt ? chat?.latestMessage.updatedAt : ""
        },
      }));

      setChats(newChats);
    };

    fetchData();
  }, []);

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  const onPressChatHandler = (user) => {
    navigation.navigate("ChattingScreen", { user });
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.chatItem}
        onPress={() => onPressChatHandler(item.user)}
        activeOpacity={0.8}
      >
        <Avatar.Image size={52} source={{}} style={styles.avatar} />
        <View>
          <Text style={styles.userName}>{item.user.name}</Text>
          <View style={styles.lastMessageContiner}>
            <Text style={styles.lastMessage}>{item.lastMessage.text}</Text>
            <Text style={styles.lastMessage}>
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
  lastMessage: {
    fontSize: 14,
    color: "#666",
  },
  lastMessageContiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minWidth: "50%",
  },
  avatar: {
    marginRight: 16,
  },
});

export default Chats;
