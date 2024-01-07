import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Pressable,
  Text,
  Alert,
  Image
} from "react-native";
import { UserList } from "../../data/data";

import Title from "../../components/ui/Title";
import Card from "../../components/ui/Card";
import InputField from "../../components/ui/InputField";
import PrimaryButton from "../../components/Button/PrimaryButton";
import Colors from "../../constansts/Colors";
import PasswordField from "../../components/ui/PasswordField";
import TextButton from "../../components/Button/TextButton";
import login from "../../api/auth/login";
import { storeData, removeData } from "../../utils/storage";
import { useUser } from "../../contexts/UserContext";
import logo from "../../assets/logo.png";

function FirstLoginPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {resetUser} = useUser();

  function emailHandler(enteredMail) {
    setEmail(enteredMail);
  }

  function passwordHandler(enteredPassword) {
    setPassword(enteredPassword);
  }

  function createAccountHandler() {
    navigation.navigate("SignUpScreen");
  }

  async function loginHandler() {
    try {
      const { token } = await login(email, password);
      removeData("userInfo");
      storeData("userInfo", token);
      resetUser();
      navigation.replace("Home");
      Alert.alert("Giriş Başarılı", "Hoşgeldiniz!");
    } catch (error) {
      Alert.alert("Hata", "Geçersiz kullanıcı adı veya şifre");
    }
  }

  return (
    <>
      <StatusBar style="auto" />
      <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
          <View style={styles.rootContainer}>
            <Title>Giriş Yap</Title>
            <Image style={styles.cardContainer} source={logo}></Image>
            <View style={styles.informationContainer}>
              <InputField
                placeholder={"Kullanıcı Adı"}
                onAddInput={emailHandler}
              ></InputField>
              <PasswordField
                placeholder={"Şifre"}
                onAddInput={passwordHandler}
              ></PasswordField>
            </View>
            <View style={styles.textButtonContainer}>
              <Text>Hesabınız yok mu?</Text>
              <TextButton
                style={styles.createAccountButton}
                onPress={createAccountHandler}
              >
                Hesap Oluştur
              </TextButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton style={styles.button} onPress={loginHandler}>
                Giriş Yap
              </PrimaryButton>
            </View>
            <Pressable>
              <Text style={styles.pressableText}>Şifrenizi mi unuttunuz?</Text>
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
    width: '60%',
    height: '30%',
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
    marginTop: 10,
  },
  informationContainer: {
    marginVertical: 55,
  },
  buttonContainer: {
    paddingTop: 30,
  },
  createAccountButton: {
    paddingHorizontal: 5,
    fontSize: 14,
  },
  textButtonContainer: {
    flexDirection: "row",
  },
});
