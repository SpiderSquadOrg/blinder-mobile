import { View, StyleSheet, Dimensions, Text } from "react-native";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import SubTitle from "../../../components/ui/SubTitle";
import TextButton from "../../../components/Button/TextButton";
import MusicCard from "../../../components/ui/MusicCard";
import OptionSearchBar from "../../../components/ui/OptionSearchBar";
import { MusicList } from "../../../data/data";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationFavoriteMusicScreen({ navigation }) {
  function nextPageHandler() {
    navigation.navigate("RegistrationMovieTypeScreen");
  }

  return (
    <View style={styles.container}>
      <RegistrationQueryText style={styles.title}>
        SEVDİĞİNİZ MÜZİKLER
      </RegistrationQueryText>
      <View>
        <SubTitle style={styles.subtitle}>
          Profilinize en az 3 müzik ekleyin. Bu sayede sizinle aynı fikirde olan
          kişilerle etkileşim kurabilecek ve tanışabileceksiniz.
        </SubTitle>
        <SubTitle>0/3+</SubTitle>
      </View>
      <View>
        <OptionSearchBar type={"şarkı"} musicData={MusicList} />
      </View>
      <View>
        <MusicCard musicList={MusicList} />
      </View>

      <View style={styles.buttonContainer}>
        <TextButton onPress={nextPageHandler} style={styles.textButton}>
          İleri
        </TextButton>
      </View>
    </View>
  );
}

export default RegistrationFavoriteMusicScreen;

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
});
