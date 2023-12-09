import { View, StyleSheet, ScrollView, Dimensions, Text } from "react-native";
import React, { useState } from "react";

import { Switch } from "react-native-paper";
import { newUser } from "../../data/userData";
import SettingsItem from "../../components/ui/SettingItem";
import SubTitle from "../../components/ui/SubTitle";
import Colors from "../../constansts/Colors";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function SettingsScreen() {
  const [isDarkModeOn, setIDarkModeOn] = React.useState(false);

  const onToggleSwitch = () => setIDarkModeOn(!isDarkModeOn);

  return (
    <ScrollView>
      <View style={styles.mainTitle}>
        <SubTitle style={{ color: "gray" }}>Hesap Ayarları</SubTitle>
        <View>
          <SettingsItem itemName={"Username"} item={newUser.username} />
          <SettingsItem itemName={"Name"} item={newUser.name} />
          <SettingsItem itemName={"Surname"} item={newUser.surname} />
          <SettingsItem itemName={"Email"} item={newUser.email} />
          <SettingsItem itemName={"Gender"} item={newUser.gender} />
          <SettingsItem itemName={"Birthdate"} item={newUser.birthDate} />
          <SettingsItem itemName={"Location"} item={newUser.location} />
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.mainTitle}>
          <SubTitle style={{ color: "gray" }}>Karanlık Mod</SubTitle>
        </View>
        <View style={{ marginTop: screenHeight * 0.03 }}>
          <Switch
            value={isDarkModeOn}
            onValueChange={onToggleSwitch}
            color={Colors.primary500}
            style={{ marginRight: screenWidth * 0.02 }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  mainTitle: {
    alignItems: "flex-start",
    alignContent: "center",
    marginTop: screenHeight * 0.02,
    marginLeft: screenWidth * 0.05,
  },
  container: {
    flexDirection: "row",
    marginTop: screenHeight * 0.02,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "gray",
  },
});
