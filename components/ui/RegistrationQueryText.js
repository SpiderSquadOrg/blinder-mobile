import { View, StyleSheet, Text } from "react-native";

function RegistrationQueryText({ children, style }) {
  return (
    <View style={[styles.textContainer, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default RegistrationQueryText;

const styles = StyleSheet.create({
  textContainer: {
    marginLeft: 35,
    marginTop: 110,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#898A8D",
  },
});
