import { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import InputField from "../../../components/ui/InputField";

function RegistrationSurnameScreen({ navigation }) {
  const [surname, setSurname] = useState("");
  function surnameHandler(surname) {
    setSurname(surname);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <RegistrationQueryText>SOYADIN NE ?</RegistrationQueryText>
        <View style={styles.inputFieldContainer}>
          <InputField placeholder={"Soyadı"} onAddInput={surnameHandler} />
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
});
