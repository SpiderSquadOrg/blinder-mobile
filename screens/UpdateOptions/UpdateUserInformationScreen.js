import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import { newUser } from "../../data/userData";
import SubTitle from "../../components/ui/SubTitle";
import SettingsItem from "../../components/ui/SettingItem";
import InputField from "../../components/ui/InputField";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function UpdateUserInformationScreen() {
  const [name, setName] = useState(newUser.name);

  /* useEffect(() => { 
  }, [newUser.name]); */

  function nameHandler(name) {
    setName(name);
  }

  function onPressName() {
    newUser.name = name;
  }

  return (
    <ScrollView>
      <View style={styles.mainTitle}>
        <SubTitle style={{ color: "gray" }}>
          Kullanıcı Ayarları Güncelleme
        </SubTitle>
        <View>

          <View>
            <SettingsItem itemName={"İsim"} item={name} />
            <View style={styles.inputFieldContainer}>
              <InputField placeholder={"İsim"} onAddInput={nameHandler} />
              <Pressable
                style={({ pressed }) => (pressed ? styles.pressed : null)}
                onPress={onPressName}
              >
                <Ionicons name="checkmark" size={24} color="black" />
              </Pressable>
            </View>
          </View>

          
        </View>
      </View>
    </ScrollView>
  );
}

export default UpdateUserInformationScreen;

const styles = StyleSheet.create({
  mainTitle: {
    alignItems: "flex-start",
    alignContent: "center",
    marginTop: screenHeight * 0.02,
    marginLeft: screenWidth * 0.05,
  },
  pressed: {
    opacity: 0.75,
  },
  inputFieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
