import { View, StyleSheet, Dimensions, Text, Pressable } from "react-native";

import Colors from "../../constansts/Colors";
import { Appbar } from "react-native-paper";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function ProfileHeader({ settings, logOut ,navigation }) {
  function settingsHandler() {
    settings();
  }
  function logOutHandler() {
    logOut();
  }
  return (
    <View style={styles.rootContainer}>
      <Appbar.Action
        icon="menu"
        iconColor={"white"}
        size={32}
        onPress={() => navigation.openDrawer()}
      />

      <Pressable
        onPress={logOutHandler}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
      >
        <Text style={styles.textStyle}>Çıkış Yap</Text>
      </Pressable>
    </View>
  );
}

export default ProfileHeader;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 16,
    alignItems: "center",
  },
  pressed: {
    opacity: 0.75,
  },
  textStyle: {
    fontSize: 20,
    color: "#F9E8D9",
  },
  profileText: {
    color: "#F9E8D9",
    fontSize: 50,
  },
});
