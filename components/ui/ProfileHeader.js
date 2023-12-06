import { View, StyleSheet, Dimensions, Text, Pressable } from "react-native";

import Colors from "../../constansts/Colors";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function ProfileHeader({ settings, logOut }) {
  function settingsHandler() {
    settings();
  }
  function logOutHandler() {
    logOut();
  }
  return (
    <View style={styles.rootContainer}>
      <Pressable
        onPress={settingsHandler}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        android_ripple={{ color: Colors.primary800 }}
      >
        <Text style={styles.textStyle}>Ayarlar</Text>
      </Pressable>
      
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
    paddingHorizontal: 16,
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
