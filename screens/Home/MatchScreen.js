import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Title from "../../components/ui/Title";
import UserProfileCard from "../../containers/MatchCard";

function MatchScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Title>BLINDER</Title>

      <UserProfileCard />
    </View>
  );
}

export default MatchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
  },
});
