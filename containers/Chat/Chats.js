import React, { useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Avatar } from "react-native-paper";

function Chats({ navigation, route }) {
  const [chats, setChats] = useState([
    {
      id: 1,
      user: {
        name: "Nine Tailed Fox",
      },
      lastMessage: {
        text: "Lorem ipsum dolor sit amet",
        timestamp: new Date(),
      },
    },
    // Diğer chat verileri buraya eklenebilir
  ]);

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
    minWidth: "70%",
  },
  avatar: {
    marginRight: 16,
  },
});

export default Chats;
