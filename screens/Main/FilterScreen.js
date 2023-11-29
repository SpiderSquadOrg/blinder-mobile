import React from "react";
import { StyleSheet, View } from "react-native";
import GenderFilter from "../../containers/GenderFilter";
import AgeFilter from "../../containers/AgeFilter";
import LocationFilter from "../../containers/LocationFilter";

function FilterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <GenderFilter />
      <AgeFilter />
      <LocationFilter style={{ marginVertical: 20 }} />
    </View>
  );
}

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    display: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    marginVertical: 20,
    height: "100%",
  },
});
