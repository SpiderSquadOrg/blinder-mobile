import { View, StyleSheet, Dimensions } from "react-native";
import { useState } from "react";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import GenderPicker from "../../../containers/GenderFilter/index";
import TextButton from "../../../components/Button/TextButton";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationPartnerGenderScreen({ navigation }) {
  const [gender, setGender] = useState();

  const genderHandler = (gender) => {
    setGender(gender);
  };

  function nextPageHandler() {
    navigation.navigate("RegistrationLocationScreen");
  }

  return (
    <View>
      <RegistrationQueryText>KİMİNLE TANIŞMAK İSTERSİN ?</RegistrationQueryText>
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

export default RegistrationPartnerGenderScreen;

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