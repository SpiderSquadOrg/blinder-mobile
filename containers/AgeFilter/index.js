import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/ui/Header";
import RangeSlider from "../../components/ui/RangeSlider";

function AgeFilter() {
  const [values, setValues] = useState([25, 45]);

  return (
    <View style={styles.container}>
      <View style={styles.headers}>
        <Header>Yaş Aralığınız</Header>
        <Header>
          {values[0]} - {values[1]!==75?values[1]:values[1]+"+"}
        </Header>
      </View>

      <RangeSlider
        values={values}
        setValues={setValues}
        min={18}
        max={75}
        step={1}
        length={300}
        isWithStepText={true}
        steps={[18, 25, 35, 45, 55, 65, "75+"]}
      />
    </View>
  );
}

export default AgeFilter;

const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
  headers: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
});
