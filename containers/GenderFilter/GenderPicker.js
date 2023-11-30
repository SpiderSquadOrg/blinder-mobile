import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ToggleButton } from "react-native-paper";

function GenderPicker() {
  const [selectedGender, setSelectedGender] = useState(null);

  const onButtonToggle = (value) => {
    setSelectedGender(value === selectedGender ? null : value);
  };

  const getStatus = (value) => {
    return selectedGender === value ? "checked" : "unchecked";
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <ToggleButton
            icon={"gender-female"}
            value="female"
            status={getStatus("female")}
            onPress={() => onButtonToggle("female")}
            size={50}
            style={styles.button}
            rippleColor={"transparent"}
          />
          <Text style={{ marginTop: 5 }}>Kadın</Text>
        </View>
        <View style={styles.buttonContainer}>
          <ToggleButton
            icon={"gender-male"}
            value="male"
            status={getStatus("male")}
            onPress={() => onButtonToggle("male")}
            size={50}
            style={styles.button}
            rippleColor={"transparent"}
          />
          <Text style={{ marginTop: 5 }}>Erkek</Text>
        </View>
      </View>
    </View>
  );
}

export default GenderPicker;

const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginVertical: 15,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 25,
  },
  button: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "#BDBDBD",
  },
});
