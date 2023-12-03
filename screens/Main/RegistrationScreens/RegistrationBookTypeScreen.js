import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import { useState } from "react";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import SubTitle from "../../../components/ui/SubTitle";
import TextButton from "../../../components/Button/TextButton";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationBookTypeScreen() {
  const [selectedBookTypes, setSelectedBookTypes] = useState([]);

  const bookTypes = [
    "Roman",
    "Polisiye",
    "Macera",
    "Korku",
    "Bilim Kurgu",
    "Fantastik",
    "Romantik",
    "Gerilim",
    "Suç",
    "Gizem",
    "Biyografi",
    "Tarih",
    "Müzikal",
    "Aile",
    "Spor",
    "Bilim ve Doğa",
    "Kısa Hikaye",
    "Dramatik",
    "Komedi",
    "Bilgi",
    "Felsefi",
    "Klasik",
    "Çocuk Kitabı",
    "Gençlik",
    "Sosyal Bilim",
    "Politik",
    "Psikolojik",
    "Eğitim",
    "Din",
    "Sürükleyici",
    "Efsanevi",
    "Tarihi Kurgu",
    "Epik",
    "Siyasi",
    "Kültür",
    "Sanat",
    "Deneysel",
    "Bağımsız",
    "Kara Mizah",
    "Neo-Noir",
    "Gangster",
    "Kostüm",
    "Kara Komedi",
    "Doğaüstü",
    "Sürreal",
    "Popüler Bilim",
    "Retro-Futuristik",
  ];

  function nextPageHandler() {
    // navigation.navigate("");
  }

  return (
    <ScrollView>
      <View>
        <RegistrationQueryText style={styles.title}>
          SEVDİĞİNİZ KİTAP TÜRLERİ
        </RegistrationQueryText>
        <View>
          <SubTitle style={styles.subtitle}>
            Profilinize en az 3 kitap türü ekleyin. Bu sayede sizinle aynı
            fikirde olan kişilerle etkileşim kurabilecek ve tanışabileceksiniz.
          </SubTitle>
          <SubTitle>0/3+</SubTitle>
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

export default RegistrationBookTypeScreen;

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
});
