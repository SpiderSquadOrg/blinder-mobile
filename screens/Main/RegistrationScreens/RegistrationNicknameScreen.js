import { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import Colors from "../../../constansts/Colors";
import TextButton from "../../../components/Button/TextButton";
import SubTitle from "../../../components/ui/SubTitle";
import { nicknameData } from "../../../data/nicknameData";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationNicknameScreen({ navigation }) {
  const [nickname, setNickname] = useState(
    nicknameData[generateRandomNumber()]
  );

  function generateRandomNumber() {
    const min = 0;
    const max = 372;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
  }

  function nicknameHandler() {
    let randomNum = generateRandomNumber();
    setNickname(nicknameData[randomNum]);
  }
  function nextPageHandler() {
    navigation.navigate("RegistrationGenderScreen");
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <RegistrationQueryText>RUMUZUNUZ NE ?</RegistrationQueryText>
        <View style={styles.nicknameContainer}>
          <SubTitle>
            {nickname.charAt(0).toUpperCase() + nickname.slice(1)}
          </SubTitle>
        </View>
        <View style={styles.randomPickerContainer}>
          <Pressable
            style={({ pressed }) => (pressed ? styles.pressed : null)}
            onPress={nicknameHandler}
          >
            <FontAwesome name="random" size={30} color="gray" />
          </Pressable>
        </View>

        <View style={styles.buttonContainer}>
          <TextButton onPress={nextPageHandler} style={styles.textButton}>
            İleri
          </TextButton>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default RegistrationNicknameScreen;

const styles = StyleSheet.create({
  randomPickerContainer: {
    marginTop: screenHeight * 0.04,
    marginHorizontal: screenWidth * 0.45,
  },
  nicknameContainer: {
    marginTop: screenHeight * 0.04,
    borderWidth: 2,
    borderColor: "gray",
    backgroundColor: Colors.accent500,
    borderRadius: 9,
    padding: screenWidth * 0.03,
    alignSelf: "center",
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    paddingRight: 28,
  },
  buttonContainer: {
    marginTop: 45,
    marginLeft: "auto",
  },
  pressed: {
    opacity: 0.75,
  },
});