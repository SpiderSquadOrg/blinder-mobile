import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../../components/ui/Header";
import { ToggleButton } from "react-native-paper";

function GenderFilter() {
  const [status, setStatus] = useState([]);

  const onButtonToggle = (value) => {
    setStatus(
      status.includes(value)
        ? status.filter((v) => v !== value)
        : [...status, value]
    );
  };

  return (
    <View style={styles.container}>
      <Header>Cinsiyet</Header>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <ToggleButton
            icon={"gender-male"}
            value="male"
            status={status.includes("male") ? "checked" : "unchecked"}
            onPress={() => onButtonToggle("male")}
            size={50}
            style={styles.button}
          />
          <Text style={{ marginTop: 5 }}>Erkek</Text>
        </View>
        <View style={styles.buttonContainer}>
          <ToggleButton
            icon={"gender-female"}
            value="female"
            status={status.includes("female") ? "checked" : "unchecked"}
            onPress={() => onButtonToggle("female")}
            size={50}
            style={styles.button}
          />
          <Text style={{ marginTop: 5 }}>Kadın</Text>
        </View>
        <View style={styles.buttonContainer}>
          <ToggleButton
            icon={"gender-male-female-variant"}
            value="other"
            status={status.includes("other") ? "checked" : "unchecked"}
            onPress={() => onButtonToggle("other")}
            size={50}
            style={styles.button}
          />
          <Text style={{ marginTop: 5 }}>Diğer</Text>
        </View>
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
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
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
