import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/ui/Header";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";

function LocationFilter({ style }) {
  const [selectedLocation, setSelectedLocation] = useState("Yok"); // ["Ankara", "İstanbul", "İzmir"]
  return (
    <View style={[styles.container, style]}>
      <View style={styles.headers}>
        <Header>Konum</Header>
        <Header
          style={{
            fontWeight: 400,
          }}
        >
          {selectedLocation}
        </Header>
      </View>
      <PrimaryButton style={{ marginTop: 20 }}>
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
