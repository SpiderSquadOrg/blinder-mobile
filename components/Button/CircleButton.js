import { View, StyleSheet, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constansts/Colors";

function CircleButton({ onPress, style, iconName }) {
  return (
    <View style={styles.container}>
      <View style={[styles.outerContainer, style]}>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [styles.innerContainer, styles.pressed]
              : styles.innerContainer
          }
          onPress={onPress}
        >
          <Ionicons
            name={iconName}
            size={25}
            color="white"
            style={styles.innerContainer}
          />
        </Pressable>
      </View>
    </View>
  );
}

export default CircleButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  outerContainer: {
    backgroundColor: Colors.primary600,
    borderRadius: 70,
    overflow: "hidden",
    width: 60,
    height: 60,
    marginHorizontal: 50,
  },
  pressed: {
    opacity: 0.75,
  },
  innerContainer: {
    justifyContent: "center",
    textAlign: "center",
  },
});
