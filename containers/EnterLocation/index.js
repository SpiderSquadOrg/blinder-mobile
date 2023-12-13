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
}) {
  const [ciso, setCiso] = useState(null);

  return (
    <View style={styles.container}>
      {country == null && (
        <SelectCountryContainer
          setCiso={setCiso}
          setCountry={setCountry}
          country={country}
        />
      )}
      {(ciso!=null && state==null && country!=null) && (
        <SelectStateContainer state={state} setState={setState} ciso={ciso} />
      )}
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
