import { Text, StyleSheet } from "react-native";

function Header({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export default Header;

const styles = StyleSheet.create({
  title: {
    color: "#000",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: 500,
  },
});
