import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/ui/Header";

function LocationFilter({style}) {
  return (
    <View style={[styles.container, style]}>
      <Header>Konum Tercihiniz</Header>
    </View>
  );
}

export default LocationFilter;

const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
});
