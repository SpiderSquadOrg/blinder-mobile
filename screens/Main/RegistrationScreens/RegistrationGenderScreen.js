import { View, StyleSheet, Dimensions } from "react-native";
import { useState } from "react";
import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";

import TextButton from "../../../components/Button/TextButton";
import GenderPicker from "../../../containers/GenderFilter/GenderPicker";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationGenderScreen({ navigation }) {
  const [gender, setGender] = useState();

  const genderHandler = (gender) => {
    setGender(gender);
  };

  function nextPageHandler() {
    navigation.navigate("RegistrationBirthDateScreen");
  }

  return (
    <View>
      <RegistrationQueryText>CİNSİYETİNİZ NEDİR ?</RegistrationQueryText>
      <View style={styles.genderContainer}>
        <GenderPicker onGenderSelect={genderHandler} />
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
  genderContainer: {
    marginTop: screenHeight * 0.06,
    marginLeft: screenWidth * 0.09,
  },
  buttonContainer: {
    marginTop: screenHeight * 0.06,
    marginLeft: "auto",
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    paddingRight: 28,
  },
});
