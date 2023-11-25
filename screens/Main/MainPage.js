import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import Title from "../../components/ui/Title";
import SubTitle from "../../components/ui/SubTitle";
import Card from "../../components/ui/Card";
import PrimaryButton from "../../components/Button/PrimaryButton";

function MainPage() {
  function googleLogInHandler() {}
  function mailLoginHandler() {}
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.rootScreen}>
        <View style={styles.screen}>
          <Title style={styles.mainTitle}>BLINDER</Title>
          <SubTitle>Görmeden Kaydır</SubTitle>
          <Card style={styles.cardContainer}></Card>
          <SubTitle style={styles.textStyle}>
            Oturum açarak Koşullar ve Gizlilik Politikası şartlarını kabul etmiş
            olursunuz.
          </SubTitle>
          <View style={styles.buttonsContainer}>
            <PrimaryButton
              style={styles.buttonContainer}
              onPress={googleLogInHandler}
            >
              <Ionicons name="logo-google" size={24} color="white" />
              {"   "}
              GOOGLE İLE GİRİŞ YAP
            </PrimaryButton>
            <PrimaryButton
              style={styles.buttonContainer}
              onPress={mailLoginHandler}
            >
              <Ionicons name="mail" size={24} color="white" />
              {"   "}
              E-POSTA İLE GİRİŞ YAP
            </PrimaryButton>
          </View>
        </View>
      </View>
    </>
  );
}

export default MainPage;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  screen: {
    marginTop: 90,
    alignItems: "center",
  },
  cardContainer: {
    width: 200,
    height: 200,
    marginBottom: 18,
  },
  textStyle: {
    fontWeight: "normal",
    marginHorizontal: 70,
  },
  mainTitle: {
    fontSize: 45,
  },
  buttonsContainer: {
    paddingTop: 90,
  },
});
