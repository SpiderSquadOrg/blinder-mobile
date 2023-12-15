import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import SelectCountryContainer from "./SelectCountry";
import SelectStateContainer from "./SelectState";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function EnterLocationContainer({
  country,
  state,
  isLocationEnabled,
  setCountry,
  setState,
  countryModalVisible,
  setCountryModalVisible,
  stateModalVisible,
  setStateModalVisible,
}) {
  const [ciso, setCiso] = useState(null);

  useEffect(() => {
    setState(null);
  }
  , [ciso]);

  return (
    <View style={styles.container}>
      <SelectCountryContainer
        setCiso={setCiso}
        setCountry={setCountry}
        country={country}
        countryModalVisible={countryModalVisible}
        setCountryModalVisible={setCountryModalVisible}
      />

      <SelectStateContainer
        state={state}
        setState={setState}
        ciso={ciso}
        stateModalVisible={stateModalVisible}
        setStateModalVisible={setStateModalVisible}
      />
    </View>
  );
}

export default EnterLocationContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
});
