import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/ui/Header";
import { ToggleButton } from "react-native-paper";

function GenderFilter() {
  const [status, setStatus] = useState("none");

  const onButtonToggle = (value) => {
    setStatus(value);
  };

  return (
    <View style={styles.container}>
      <Header>Cinsiyet Seçiminiz</Header>
      <View style={styles.buttonsContainer}>
        <ToggleButton
          icon={"gender-male"}
          value="male"
          status={status == "male" ? "checked" : "unchecked"}
          onPress={() => onButtonToggle("male")}
          size={50}
          style={styles.button}
        />
        <ToggleButton
          icon={"gender-female"}
          value="female"
          status={status == "female" ? "checked" : "unchecked"}
          onPress={() => onButtonToggle("female")}
          size={50}
          style={styles.button}
        />
        <ToggleButton
          icon={"gender-male-female-variant"}
          value="other"
          status={status == "other" ? "checked" : "unchecked"}
          onPress={() => onButtonToggle("other")}
          size={50}
          style={styles.button}
        />
      </View>
  
    </View>
  );
}

export default GenderFilter;

const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%", // Adjusted to take up 80% of the container
    marginVertical: 20, // Added some vertical spacing
  },
  button: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    borderRadius: 35, // Half of width/height to create a circle
    borderWidth: 1,
    borderColor: "#BDBDBD",
  },
});
