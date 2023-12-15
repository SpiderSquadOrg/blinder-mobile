import { View, StyleSheet, Dimensions } from "react-native";
import { useState } from "react";
import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import GenderPicker from "../../../containers/GenderFilter/GenderPicker";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationGenderScreen({ navigation }) {
  const [gender, setGender] = useState();

  const genderHandler = (gender) => {
    setGender(gender);
  };


  return (
    <View>
      <RegistrationQueryText>CİNSİYETİNİZ NEDİR ?</RegistrationQueryText>
      <View style={styles.genderContainer}>
        <GenderPicker onGenderSelect={genderHandler} />
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
});
