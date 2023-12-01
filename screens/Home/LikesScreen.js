import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Title from "../../components/ui/Title";


const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function LikesScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Title>Likes</Title>
    </View>
  );
}

export default LikesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },
});
