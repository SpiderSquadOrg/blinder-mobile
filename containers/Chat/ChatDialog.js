import React, { useEffect, useRef } from "react";
import { FlatList, View } from "react-native";
import ChatBubble from "../../components/ui/ChatBubble";

function ChatDialog({ messages }) {
  const flatListRef = useRef(null);

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);
  
  useEffect(() => {
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: false });
    }, 50);
  }, []);

  return (
    <FlatList
      ref={flatListRef}
      data={messages}
      keyExtractor={(item, index) => index.toString()}
      ListFooterComponent={<View style={{height: 50}}/>}
      renderItem={({ item, index }) => (
        <ChatBubble
          message={item.text}
          isMe={item.isMe}
          timestamp={item.timestamp}
          showDateSeparator={shouldShowDateSeparator(index, messages)}
          date={formatDate(item.timestamp)}
        />
      )}
    />
  );
}

function shouldShowDateSeparator(index, messages) {
  if (index === 0) {
    return true;
  }

  const currentDate = new Date(messages[index].timestamp).toDateString();
  const previousDate = new Date(messages[index - 1].timestamp).toDateString();

  return currentDate !== previousDate;
}

function formatDate(timestamp) {
  const date = new Date(timestamp);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
}
export default ChatDialog;
