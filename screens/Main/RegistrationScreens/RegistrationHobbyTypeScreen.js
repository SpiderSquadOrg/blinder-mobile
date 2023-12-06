import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import { useState } from "react";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import SubTitle from "../../../components/ui/SubTitle";
import TextButton from "../../../components/Button/TextButton";
import TypesOptions from "../../../containers/Options/TypesOptions";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationHobbyTypeScreen({ navigation }) {
  const [selectedHobbyTypes, setSelectedHobbyTypes] = useState([]);

  const hobbyList = [
    "Resim Yapma",
    "Müzik Dinleme",
    "Bahçe Çiçekleri Yetiştirme",
    "Yemek Pişirme",
    "Deniz Kabuğu Toplama",
    "El Sanatları",
    "Diksiyon Geliştirme",
    "Astronomi İle İlgilenme",
    "Koleksiyon Yapma",
    "Ressamlık",
    "Fotoğrafçılık",
    "Seyahat Etme",
    "Yazı Yazma",
    "Felsefe Kitapları Okuma",
    "Doğa Yürüyüşleri",
    "Tarih Araştırmaları",
    "Gönüllü Çalışma",
    "Dil Öğrenme",
    "Şiir Yazma",
  ];

  const hobbyTypesHandler = (selectedHobbies) => {
    setSelectedHobbyTypes(selectedHobbies);
  };

  function nextPageHandler() {
    navigation.navigate("RegistrationLocationScreen");
  }

  return (
    <ScrollView>
      <View>
        <RegistrationQueryText style={styles.title}>
          HOBİLERİNİZ
        </RegistrationQueryText>
        <View>
          <SubTitle style={styles.subtitle}>
            Profilinize en az 3 Hobi ekleyin. Bu sayede sizinle aynı fikirde
            olan kişilerle etkileşim kurabilecek ve tanışabileceksiniz.
          </SubTitle>
          <SubTitle>0/3+</SubTitle>
        </View>

        <View style={styles.hobbiesContainer}>
          <TypesOptions onTypeSelect={hobbyTypesHandler} options={hobbyList} />
        </View>

        <View style={styles.buttonContainer}>
          <TextButton onPress={nextPageHandler} style={styles.textButton}>
            İleri
          </TextButton>
        </View>
      </View>
    </ScrollView>
  );
}

export default RegistrationHobbyTypeScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
  },
  subtitle: {
    fontWeight: "normal",
    marginTop: screenHeight * 0.02,
    marginHorizontal: screenWidth * 0.06,
  },
  buttonContainer: {
    marginVertical: screenHeight * 0.06,
    marginLeft: "auto",
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    paddingRight: 28,
  },
  hobbiesContainer: {
    marginTop: screenHeight * 0.03,
  },
});
