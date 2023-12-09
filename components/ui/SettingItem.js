import { View, StyleSheet, Text, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function SettingsScreen({ itemName, item }) {
  return (
    <View style={styles.container}>
      <Text style={styles.itemName}>{itemName} : </Text>
      <Text style={styles.item}>{item}</Text>
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: screenWidth * 0.02,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: screenHeight * 0.01,
  },
  itemName: {
    color: "gray",
    marginRight: screenWidth * 0.5,
    fontSize: 15,
  },
  item: {
    fontWeight: "bold",
  },
});
