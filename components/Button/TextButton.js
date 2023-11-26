import { View, StyleSheet, Pressable, Text } from "react-native";
import Colors from "../../constansts/Colors";

function TextButton({ style, onPress, children }) {
  return (
    <View style={styles.showButton}>
      <Pressable onPress={onPress}>
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
});
