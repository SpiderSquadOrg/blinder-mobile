import { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import InputField from "../../../components/ui/InputField";
import TextButton from "../../../components/Button/TextButton";

function RegistrationNameScreen({ navigation }) {
  const [name, setName] = useState("");
  function nameHandler(name) {
    setName(name);
  }
  function nextPageHandler() {
    navigation.navigate("RegistrationGenderScreen");
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <RegistrationQueryText>İSMİN NE ?</RegistrationQueryText>
        <View style={styles.inputFieldContainer}>
          <InputField placeholder={"Name"} onAddInput={nameHandler} />
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

export default RegistrationNameScreen;

const styles = StyleSheet.create({
  inputFieldContainer: {
    marginTop: 25,
    marginHorizontal: 20,
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
});
