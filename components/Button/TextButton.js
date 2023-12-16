import { View, StyleSheet, Pressable, Text } from "react-native";
import Colors from "../../constansts/Colors";

function TextButton({ style, onPress, children, disabled }) {
  return (
    <View style={styles.showButton}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressedButton : null)}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={[styles.showText, style]}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default TextButton;

const styles = StyleSheet.create({
  showText: {
    color: Colors.primary500,
  },
  showButton: {
    alignSelf: "center",
  },
  pressedButton: {
    opacity: 0.75,
  },
});
