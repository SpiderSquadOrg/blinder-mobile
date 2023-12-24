import { View, StyleSheet, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";

import TextButton from "../../../components/Button/TextButton";
import GenderPicker from "../../../containers/GenderFilter/GenderPicker";
import { useUser } from "../../../contexts/UserContext";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationGenderScreen({ navigation, route }) {
  const [gender, setGender] = useState();

  /*const { user } = useUser();

  useEffect(() => {
    if(user){
      navigation.navigate("Home");
    }
  }, []);*/

  const genderHandler = (gender) => {
    setGender(gender);
  };

  function nextPageHandler() {
    if(gender === undefined){
      alert("Please fill in all fields");
      return;
    }
    navigation.navigate("RegistrationBirthDateScreen", {
      user: {
        ...route.params.user,
        genderId: gender.id,
      },
    });
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
    marginRight: 23,
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 5,
  },
});
