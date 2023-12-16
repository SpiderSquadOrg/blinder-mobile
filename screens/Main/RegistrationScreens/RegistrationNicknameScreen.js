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
import SubTitle from "../../../components/ui/SubTitle";
import TextButton from "../../../components/Button/TextButton";
import { nicknameData1, nicknameData2 } from "../../../data/nicknameData";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationNicknameScreen({ navigation,route }) {
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
    navigation.navigate("RegistrationImageScreen",
    {
      user: {
        ...route.params.user,
        nickname: nickname,
      },
    });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <RegistrationQueryText>TAKMA ADINIZI SEÇİN</RegistrationQueryText>
        <View style={styles.mainContainer}>
          <View style={styles.nicknameOuterContainer}>
            <View style={styles.nicknameInnerContainer}>
              <SubTitle style={{ color: "white" }}>{nickname}</SubTitle>
            </View>
          </View>
          <View style={styles.randomPickerContainer}>
            <Pressable
              style={({ pressed }) => (pressed ? styles.pressed : null)}
              onPress={nicknameHandler}
            >
              <FontAwesome name="random" size={30} color="gray" />
            </Pressable>
          </View>
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
    marginHorizontal: screenWidth * 0.05,
    marginTop: screenHeight * 0.02,
  },
  nicknameOuterContainer: {
    borderWidth: 2,
    borderColor: Colors.primary600,
    backgroundColor: Colors.primary500,
    borderRadius: 15,
    padding: screenWidth * 0.03,
    alignSelf: "center",
  },
  nicknameInnerContainer: {
    margin: 5,
    width: screenWidth * 0.5,
  },
  mainContainer: {
    flexDirection: "row",
    marginTop: screenHeight * 0.08,
    alignSelf: "center",
  },
  pressed: {
    opacity: 0.75,
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    paddingRight: 28,
  },
  buttonContainer: {
    marginTop: screenHeight * 0.1,
    marginLeft: "auto",
  },
});
