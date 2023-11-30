import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import Colors from "../../constansts/Colors";

function CustomMarker() {
  return (
    <View
      style={{
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: Colors.primary500,
      }}
    />
  );
}

function RangeSlider({
  values,
  setValues,
  min,
  max,
  step,
  length,
  isWithStepText,
  steps,
  minRangeText,
  maxRangeText,
}) {
  const onValuesChange = (newValues) => {
    setValues(newValues);
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "black", fontSize: 12, marginRight: 10 }}>
        {minRangeText ? minRangeText : min}
      </Text>
      <MultiSlider
        values={[values[0], values[1]]}
        sliderLength={length}
        selectedStyle={{ backgroundColor: Colors.primary500}}
        onValuesChange={onValuesChange}
        min={min}
        max={max}
        step={step}
        isMarkersSeparated={true}
        customMarkerLeft={(e) => {
          return <CustomMarker currentValue={e.currentValue} />;
        }}
        customMarkerRight={(e) => {
          return <CustomMarker currentValue={e.currentValue} />;
        }}
      />
      {isWithStepText && (
        <View style={{ ...styles.stepContainer, width: length * 1.2 }}>
          {steps.map((step) => (
            <Text key={step} style={styles.stepText}>
              {step}
            </Text>
          ))}
        </View>
      )}

      <Text style={{ color: "black", fontSize: 12, marginLeft: 10 }}>
        {maxRangeText ? maxRangeText : max}
      </Text>
    </View>
  );
}

export default RangeSlider;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
