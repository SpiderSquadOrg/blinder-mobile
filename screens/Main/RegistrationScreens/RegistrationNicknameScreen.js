import { useEffect, useState } from "react";
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
import { nicknameData1, nicknameData2 } from "../../../data/nicknameData";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationNicknameScreen({ navigation }) {
  const [nickname, setNickname] = useState();

  useEffect(() => {
    setNickname(generateRandomCombination);
  }, []);

  generateRandomCombination = () => {
    const randomFirstWord =
      nicknameData1[Math.floor(Math.random() * nicknameData1.length)];

    const randomSecondWord =
      nicknameData2[Math.floor(Math.random() * nicknameData2.length)];

    const combinedWord = `${randomFirstWord} ${randomSecondWord}`;

    return combinedWord;
  };

  function nicknameHandler() {
    setNickname(generateRandomCombination);
  }
  function nextPageHandler() {
    navigation.navigate("RegistrationImageScreen");
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <RegistrationQueryText>TAKMA ADINIZI SEÇİN</RegistrationQueryText>
        <View style={styles.nicknameContainer}>
          <SubTitle>{nickname}</SubTitle>
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
