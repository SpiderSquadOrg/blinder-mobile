import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { useState } from "react";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import SubTitle from "../../../components/ui/SubTitle";
import TextButton from "../../../components/Button/TextButton";
import TypesOptions from "../../../containers/Options/TypesOptions";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationMovieTypeScreen({ navigation }) {
  const [selectedMovieTypes, setSelectedMovieTypes] = useState([]);

  const movieTypes = [
    "Aksiyon",
    "Macera",
    "Komedi",
    "Drama",
    "Korku",
    "Bilim Kurgu",
    "Fantastik",
    "Romantik",
    "Gerilim",
    "Suç",
    "Gizem",
    "Belgesel",
    "Animasyon",
    "Biyografi",
    "Tarih",
    "Savaş",
    "Western",
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
    "Geceyarısı Filmi",
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

  const movieTypeHandler = (selectedTypes) => {
    setSelectedMovieTypes(selectedTypes);
  };

  function nextPageHandler() {
    navigation.navigate("RegistrationSeriesTypeScreen");
  }

  return (
    <ScrollView>
      <View>
        <RegistrationQueryText style={styles.title}>
          SEVDİĞİNİZ FİLM TÜRLERİ
        </RegistrationQueryText>
        <View>
          <SubTitle style={styles.subtitle}>
            Profilinize en az 3 film türü ekleyin. Bu sayede sizinle aynı
            fikirde olan kişilerle etkileşim kurabilecek ve tanışabileceksiniz.
          </SubTitle>
          <SubTitle>0/3+</SubTitle>
        </View>
        <View style={styles.movieContainer}>
          <TypesOptions onTypeSelect={movieTypeHandler} options={movieTypes} />
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

export default RegistrationMovieTypeScreen;

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
    marginLeft: "auto",
    marginVertical: screenHeight * 0.05,
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    paddingRight: 28,
  },
  movieContainer: {
    marginTop: screenHeight * 0.03,
  },
});
