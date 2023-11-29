import { View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import CircleButton from "../../../components/Button/CircleButton";
import TextButton from "../../../components/Button/TextButton";

function RegistrationGenderScreen({ navigation }) {
  const [gender, setGender] = useState("female");

  function genderHandler(gender) {
    if (gender === "female" || gender === "male") {
      if (gender === "female") {
        setGender("female");
      } else {
        setGender("male");
      }
    }
  }

  function nextPageHandler() {
    navigation.navigate("RegistrationBirthDateScreen");
  }

  return (
    <View>
      <RegistrationQueryText>CİNSİYETİNİZ NEDİR ?</RegistrationQueryText>
      <View style={styles.buttonsContainer}>
        <CircleButton
          style={styles.button}
          iconName={"female"}
          onPress={genderHandler.bind(this, "female")}
        >
          Female
        </CircleButton>
        <CircleButton
          style={styles.button}
          iconName={"male"}
          onPress={genderHandler.bind(this, "male")}
        >
          Male
        </CircleButton>
      </View>
      <View style={styles.buttonContainer}>
        <TextButton onPress={nextPageHandler} style={styles.textButton}>
          İleri
        </TextButton>
      </View>
    </View>
  );
}

export default RegistrationGenderScreen;

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 50,
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
  },
  button: {
    padding: 15,
  },
  buttonContainer: {
    marginTop: 55,
    marginLeft: "auto",
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    paddingRight: 28,
  },
});
