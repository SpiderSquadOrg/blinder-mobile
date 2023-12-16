import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import Title from "../../components/ui/Title";
import InputField from "../../components/ui/InputField";
import PasswordField from "../../components/ui/PasswordField";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { useState } from "react";

function SignUpScreen({ navigation }) {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  function mailHandler(inputText) {
    setMail(inputText);
  }

  function passwordHandler(inputText) {
    setPassword(inputText);
  }

  function signUpHandler() {
    if (mail === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }
    navigation.navigate("RegistrationNameScreen", {
      user: { email: mail, password: password },
    });
  }

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen}>
        <View style={styles.rootContainer}>
          <Title>Sign Up</Title>
          <View style={styles.fieldContainer}>
            <InputField placeholder={"Email"} onAddInput={mailHandler} />
            <PasswordField
              placeholder={"Password"}
              onAddInput={passwordHandler}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={signUpHandler}>Sign Up</PrimaryButton>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default SignUpScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 25,
  },
  fieldContainer: {
    paddingTop: 40,
  },
  buttonContainer: {
    paddingTop: 60,
    width: 350,
  },
});
