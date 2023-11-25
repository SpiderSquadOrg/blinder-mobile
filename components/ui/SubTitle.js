import { Text, StyleSheet } from "react-native";


function SubTitle({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export default SubTitle;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "white",
    padding: 3,
  },
});
