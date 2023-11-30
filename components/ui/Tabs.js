import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SegmentedButtons } from "react-native-paper";

/*
buttons={[
    {
        value: "walk",
        label: "Walking",
    },
    {
        value: "train",
        label: "Transit",
    }
*/
const Tabs = ({ buttons,value,setValue }) => {
 

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={buttons}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default Tabs;
