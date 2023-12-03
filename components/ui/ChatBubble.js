import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Colors from "../../constansts/Colors";
import { Chip } from "react-native-paper";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function ChatBubble({ message, isMe, timestamp, showDateSeparator, date }) {
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  return (
    <View>
      {showDateSeparator && (
        <View style={styles.dateSeparatorContainer}>
          <Chip style={styles.dateSeparator} textStyle={{ color: "white" }}>
            {date}
          </Chip>
        </View>
      )}
      <View style={[styles.container, isMe ? styles.right : styles.left]}>
        <View
          style={[
            styles.bubble,
            isMe ? styles.myBubble : styles.otherBubble,
            isMe ? styles.myBubbleWithTail : styles.otherBubbleWithTail,
          ]}
        >
          <Text style={[styles.message, isMe ? styles.myMessage : ""]}>
            {message}
          </Text>
          <View style={[isMe ? styles.myTimestamp : styles.otherTimestamp]}>
            <Text
              style={[
                isMe ? styles.myTimestampText : styles.otherTimestampText,
              ]}
            >
              {formatTimestamp(timestamp)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

let borderRadius = 8;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  left: {
    justifyContent: "flex-start",
  },
  right: {
    justifyContent: "flex-end",
  },
  bubble: {
    borderRadius: borderRadius,
    minWidth: "20%",
    padding: 10,
    maxWidth: "80%",
    height: "115%",
    position: "relative",
  },
  myBubble: {
    backgroundColor: Colors.primary600,
  },
  otherBubble: {
    backgroundColor: "#E5E5E5",
  },
  myBubbleWithTail: {
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: 0,
    borderRightWidth: borderRadius,
    borderRightColor: Colors.primary600,
  },
  otherBubbleWithTail: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: borderRadius,
    borderLeftWidth: borderRadius,
    borderLeftColor: "#E5E5E5",
  },
  message: {
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24,
    color: "#000",
  },
  myMessage: {
    color: "#fff",
  },
  otherTimestamp: {
    position: "absolute",
    bottom: 5,
    right: 5,
  },
  myTimestamp: {
    position: "absolute",
    bottom: 5,
    right: 5,
  },
  otherTimestampText: {
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 18,
    color: "#828282",
  },
  myTimestampText: {
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 18,
    color: "#fff",
  },
  dateSeparator: {
    alignSelf: "center",
    marginBottom: 10,
    backgroundColor: "#202020",
    color: "white",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 18,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  dateSeparatorContainer: {
    width: screenWidth,
    alignSelf: "center",
  },
});

export default ChatBubble;
