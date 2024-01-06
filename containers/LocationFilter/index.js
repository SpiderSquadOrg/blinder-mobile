import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/ui/Header";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import { useLocation } from "../../contexts/LocationContext";

function LocationFilter({ style, selectedLocation, navigation }) {
  const { country, state, setCountry, setState } = useLocation();

  const onPress = () => {
    setCountry(null);
    setState(null);
    navigation.navigate("LocationPreferencesScreen");
  };
  return (
    <View style={[styles.container, style]}>
      <View style={styles.headers}>
        <Header>Konum</Header>
        <Header
          style={{
            fontWeight: 400,
          }}
        >
          {country && state
            ? country?.countryName + ", " + state?.stateName
            : ""}
          {country && !state ? country?.countryName : ""}
          {!country && !state ? "Seçilmedi" : ""}
        </Header>
      </View>
      <PrimaryButton style={{ marginTop: 20 }} onPress={() => onPress()}>
        <Ionicons name="earth" size={24} color="white" />
        {"   "}
        Konum Seç
      </PrimaryButton>
    </View>
  );
}

export default LocationFilter;

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
