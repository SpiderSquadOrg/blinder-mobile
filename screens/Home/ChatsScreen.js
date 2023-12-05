import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import Colors from "../../constansts/Colors";
import Chats from "../../containers/Chat/Chats";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function ChatsScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Appbar.Action
          icon="menu"
          iconColor={Colors.primary600}
          size={32}
          onPress={() => console.log("Pressed")}
        />
      </View>

      <View style={styles.content}>
        <Chats navigation={navigation} route={route} />
      </View>
    </View>
  );
}

export default ChatsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },
  appbar: {
    marginTop: screenHeight * 0.04,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});
