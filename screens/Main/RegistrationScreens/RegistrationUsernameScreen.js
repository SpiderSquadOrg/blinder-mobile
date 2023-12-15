import { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import InputField from "../../../components/ui/InputField";

function RegistrationUsernameScreen({ navigation }) {
  const [username, setUsername] = useState("");
  function usernameHandler(username) {
    setUsername(username);
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
});
