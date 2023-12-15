import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { useEffect, useState } from "react";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import SubTitle from "../../../components/ui/SubTitle";
import TypesOptions from "../../../containers/Options/TypesOptions";
import getMusicCategories from "../../../api/characteristics/getMusicCategories";
import TextButton from "../../../components/Button/TextButton";


const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationMusicTypeScreen({ navigation }) {
  const [selectedMusicTypes, setSelectedMusicTypes] = useState([]);
  const [musicTypes, setMusicTypes] = useState([])

  useEffect(() => {
    getMusicCategories().then((data) => {
      setMusicTypes(data);
    });
  }, []);

  const handleMusicTypeSelect = (selectedTypes) => {
    setSelectedMusicTypes(selectedTypes);
  };

  function nextPageHandler() {
    navigation.navigate("RegistrationFavoriteMusicScreen");
  }

  return (
    <ScrollView>
      <View>
        <RegistrationQueryText style={styles.title}>
          SEVDİĞİNİZ MÜZİK TÜRLERİ
        </RegistrationQueryText>
        <View>
          <SubTitle style={styles.subtitle}>
            Profilinize en az 3 müzik türü ekleyin. Bu sayede sizinle aynı
            fikirde olan kişilerle etkileşim kurabilecek ve tanışabileceksiniz.
          </SubTitle>
          <SubTitle>{selectedMusicTypes.length}/3+</SubTitle>
        </View>
        <View style={styles.musicContainer}>
          <TypesOptions
            onTypeSelect={handleMusicTypeSelect}
            options={musicTypes}
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
  musicContainer: {
    marginTop: screenHeight * 0.03,
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
