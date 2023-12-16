import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../../components/ui/Header";
import { ToggleButton } from "react-native-paper";

function GenderFilter({ genders, selectedGenders, gendersHandler }) {
  const onButtonToggle = (value) => {
    gendersHandler(value);
  };

  const getStatus = (value) => {
    return selectedGenders.some(gender => gender.name === value) ? "checked" : "unchecked";
  };

  const getIconName = (value) => {
    if (value === "other") {
      return "gender-male-female-variant";
    }
    return `gender-${value}`;
  };

  const getButtonText = (value) => {
    if (value === "male") {
      return "Erkek";
    } else if (value === "female") {
      return "Kadın";
    }
    return "Diğer";
  };

  return (
    <View style={styles.container}>
      <Header>Cinsiyet</Header>
      <View style={styles.buttonsContainer}>
        {genders.map((gender, index) => (
          <View key={index} style={styles.buttonContainer}>
            <ToggleButton
              icon={getIconName(gender.name)}
              value={gender.name}
              status={getStatus(gender.name)}
              onPress={() => {
                onButtonToggle(gender);
              }}
              size={50}
              style={styles.button}
              rippleColor={"transparent"}
            />
            <Text style={{ marginTop: 5 }}>{getButtonText(gender.name)}</Text>
          </View>
        ))}
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
