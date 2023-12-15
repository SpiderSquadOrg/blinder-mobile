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

function RegistrationUsernameScreen({ navigation }) {
  const [username, setUsername] = useState("");
  function usernameHandler(username) {
    setUsername(username);
  }
  function nextPageHandler() {
    navigation.navigate("RegistrationNicknameScreen");
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <RegistrationQueryText>KULLANICI ADIN NE ?</RegistrationQueryText>
        <View style={styles.inputFieldContainer}>
          <InputField
            placeholder={"Kullanıcı Adı"}
            onAddInput={usernameHandler}
          />
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

export default RegistrationUsernameScreen;

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

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