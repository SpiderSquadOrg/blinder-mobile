import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import GenderFilter from "../../containers/GenderFilter";
import AgeFilter from "../../containers/AgeFilter";
import LocationFilter from "../../containers/LocationFilter";
import PrimaryButton from "../../components/Button/PrimaryButton";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function FilterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <GenderFilter />
        <AgeFilter style={{ marginVertical: 20 }} />
        <LocationFilter style={{ marginVertical: 20 }} />
      </View>
      <PrimaryButton style={styles.button} height={50}>Filtreleri Uygula</PrimaryButton>
    </View>
  );
}

export default FilterScreen;

const styles = StyleSheet.create({
  container: {
    display: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    marginVertical: screenHeight * 0.05,
    height: "100%",
  },
  filterContainer: {
    width: "100%",
    height: "80%",
    display: "row",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  button: {
    width: "80%",
    alignSelf: "center",    
  },
});
