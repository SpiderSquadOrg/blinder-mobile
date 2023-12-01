import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { useState } from "react";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import SubTitle from "../../../components/ui/SubTitle";
import TextButton from "../../../components/Button/TextButton";
import TypesOptions from "../../../containers/Options/TypesOptions";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationSeriesTypeScreen() {
  const [selectedSeriesTypes, setSelectedSeriesTypes] = useState([]);

  const seriesTypes = [
    "Drama",
    "Komedi",
    "Aksiyon",
    "Macera",
    "Korku",
    "Bilim Kurgu",
    "Fantastik",
    "Romantik",
    "Gerilim",
    "Suç",
    "Gizem",
    "Belgesel",
    "Biyografi",
    "Tarih",
    "Müzikal",
    "Aile",
    "Spor",
    "Bilim ve Doğa",
    "Kısa Film",
    "Reality-TV",
    "Talk Show",
    "Game Show",
    "Film-Noir",
    "Musical",
    "Experimental",
    "Fan Film",
    "Short",
    "News",
    "Adult",
    "Eğlence",
    "Geceyarısı Dizisi",
    "Riportaj",
    "Din",
    "Yarışma",
    "Gerçeklik",
    "Aşk",
    "Sürükleyici",
    "Efsanevi",
    "Tarihi",
    "Epik",
    "Siyasi",
    "Psikolojik",
    "Çocuk",
    "Gençlik",
    "Sosyal",
    "Deneysel",
    "Kült",
    "Bağımsız",
    "Kara Mizah",
    "Neo-Noir",
    "Gangster",
    "Kostüm",
    "Kara Komedi",
    "Poliisiye",
    "Doğaüstü",
    "Sürreal",
    "Noir",
    "Popüler Bilim",
    "Retro-Futuristik",
  ];

  const seriesTypeHandler = (selectedTypes) => {
    setSelectedSeriesTypes(selectedTypes);
  };

  function nextPageHandler() {
    console.log(selectedSeriesTypes);
  }

  return (
    <ScrollView>
      <View>
        <RegistrationQueryText style={styles.title}>
          SEVDİĞİNİZ DİZİ TÜRLERİ
        </RegistrationQueryText>
        <View>
          <SubTitle style={styles.subtitle}>
            Profilinize en az 3 dizi türü ekleyin. Bu sayede sizinle aynı
            fikirde olan kişilerle etkileşim kurabilecek ve tanışabileceksiniz.
          </SubTitle>
          <SubTitle>0/3+</SubTitle>
        </View>
        <View style={styles.seriesContainer}>
          <TypesOptions
            onTypeSelect={seriesTypeHandler}
            options={seriesTypes}
          />
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

export default RegistrationSeriesTypeScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
  },
  subtitle: {
    fontWeight: "normal",
    marginTop: screenHeight * 0.02,
    marginHorizontal: screenWidth * 0.06,
  },
  seriesContainer: {
    marginTop: screenHeight * 0.03,
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
