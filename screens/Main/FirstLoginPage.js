import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Pressable,
  Text,
} from "react-native";

import Title from "../../components/ui/Title";
import Card from "../../components/ui/Card";
import InputField from "../../components/ui/InputField";
import PrimaryButton from "../../components/Button/PrimaryButton";
import Colors from "../../constansts/Colors";
import PasswordField from "../../components/ui/PasswordField";

function FirstLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function emailHandler(enteredMail) {
    setEmail(enteredMail);
  }

  function passwordHandler(enteredPassword) {
    setPassword(enteredPassword);
  }

  function loginHandler() {}

  return (
    <>
      <StatusBar style="auto" />
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
          <View style={styles.rootContainer}>
            <Title>Log In</Title>
            <Card style={styles.cardContainer}></Card>
            <View style={styles.informationContainer}>
              <InputField
                placeholder={"Email"}
                onAddInput={emailHandler}
              ></InputField>
              <PasswordField
                placeholder={"Password"}
                onAddInput={passwordHandler}
              ></PasswordField>
            </View>

            <View style={styles.buttonContainer}>
              <PrimaryButton style={styles.button} onPress={loginHandler}>
                Log in
              </PrimaryButton>
            </View>
            <Pressable>
              <Text style={styles.pressableText}>Forgot your password?</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
}

export default FirstLoginPage;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  cardContainer: {
    width: 175,
    height: 175,
    marginBottom: 18,
  },
  button: {
    minWidth: "75%",
  },
  pressableText: {
    color: Colors.primary500,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 70,
  },
  informationContainer: {
    marginVertical: 55,
  },
  buttonContainer: {
    paddingTop: 30,
  },
});
