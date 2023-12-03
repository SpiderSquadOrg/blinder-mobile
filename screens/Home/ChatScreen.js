import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import PrimaryButton from "../../components/Button/PrimaryButton";
import Title from "../../components/ui/Title";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function ChatScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Title>Chats</Title>
    </View>
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },
});
