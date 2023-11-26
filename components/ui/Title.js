import { Text, StyleSheet } from "react-native";
import Colors from "../../constansts/Colors";

function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 35,
    color: Colors.primary600,
    textAlign: "center",
    padding: 12,
    maxWidth: "80%",
  },
});
