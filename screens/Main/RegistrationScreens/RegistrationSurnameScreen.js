import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import InputField from "../../../components/ui/InputField";
import TextButton from "../../../components/Button/TextButton";
import { useUser } from "../../../contexts/UserContext";

function RegistrationSurnameScreen({ navigation ,route}) {
  const [surname, setSurname] = useState("");

  /*const { user } = useUser();

  useEffect(() => {
    if(user){
      navigation.navigate("Home");
    }
  }, []);*/

  function surnameHandler(surname) {
    setSurname(surname);
  }
  function nextPageHandler() {
    if (surname === "") {
      alert("Please fill in all fields");
      return;
    }
    
    navigation.navigate("RegistrationUsernameScreen",
    {
      user: {
        ...route.params.user,
        surname: surname,
      },
    });
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <RegistrationQueryText>SOYADIN NE ?</RegistrationQueryText>
        <View style={styles.inputFieldContainer}>
          <InputField placeholder={"Soyadı"} onAddInput={surnameHandler} />
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

export default RegistrationSurnameScreen;

const styles = StyleSheet.create({
  inputFieldContainer: {
    marginTop: 25,
    marginHorizontal: 20,
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    padding:5,
  },
  buttonContainer: {
    marginTop: 45,
    marginRight: 23,
    marginLeft: "auto",
  },
});