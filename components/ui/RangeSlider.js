import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import Colors from "../../constansts/Colors";

function RangeSlider({
  values,
  setValues,
  min,
  max,
  step,
  length,
  isWithStepText,
  steps,
}) {
  const onValuesChange = (newValues) => {
    setValues(newValues);
  };

  return (
    <View style={styles.container}>
      <MultiSlider
        values={[values[0], values[1]]}
        sliderLength={length}
        selectedStyle={{ backgroundColor: Colors.primary500 }}
        onValuesChange={onValuesChange}
        min={min}
        max={max}
        step={step}
      />
      {isWithStepText && (
        <View style={{ ...styles.stepContainer, width: length + 40 }}>
          {steps.map((step) => (
            <Text key={step} style={styles.stepText}>
              {step}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

export default RangeSlider;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  stepContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  stepText: {
    color: "black",
    fontSize: 12,
  },
});
