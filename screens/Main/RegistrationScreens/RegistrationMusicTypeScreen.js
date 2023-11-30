import { View, StyleSheet, Dimensions } from "react-native";
import { useState } from "react";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import SubTitle from "../../../components/ui/SubTitle";
import MusicTypes from "../../../containers/MusicOptions/MusicTypes";
import TextButton from "../../../components/Button/TextButton";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationMusicTypeScreen() {
  const [selectedMusicTypes, setSelectedMusicTypes] = useState([]);
  const handleMusicTypeSelect = (selectedTypes) => {
    setSelectedMusicTypes(selectedTypes);
  };

  function nextPageHandler() {}

  return (
    <View>
      <RegistrationQueryText style={styles.title}>
        SEVDİĞİNİZ MÜZİK TÜRLERİ
      </RegistrationQueryText>
      <View>
        <SubTitle style={styles.subtitle}>
          Profilinize en az 3 müzik türü ekleyin. Bu sayede sizinle aynı fikirde
          olan kişilerle etkileşim kurabilecek ve tanışabileceksiniz.
        </SubTitle>
        <SubTitle>0/3+</SubTitle>
      </View>
      <View style={styles.musicContainer}>
        <MusicTypes onMusicTypeSelect={handleMusicTypeSelect} />
      </View>
      <View style={styles.buttonContainer}>
        <TextButton onPress={nextPageHandler} style={styles.textButton}>
          İleri
        </TextButton>
      </View>
    </View>
  );
}

export default RegistrationMusicTypeScreen;

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
    marginTop: screenHeight * 0.06,
    marginLeft: "auto",
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    paddingRight: 28,
  },
  musicContainer: {
    marginTop: screenHeight * 0.03,
  },
});
