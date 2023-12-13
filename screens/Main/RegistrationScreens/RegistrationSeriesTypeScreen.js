import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { useEffect, useState } from "react";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import SubTitle from "../../../components/ui/SubTitle";
import TextButton from "../../../components/Button/TextButton";
import TypesOptions from "../../../containers/Options/TypesOptions";
import getSeriesCategories from "../../../api/characteristics/getSeriesCategories";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationSeriesTypeScreen({ navigation }) {
  const [selectedSeriesTypes, setSelectedSeriesTypes] = useState([]);
  const [seriesTypes, setSeriesTypes] = useState([]);

  useEffect(() => {
    getSeriesCategories().then((data) => {
      setSeriesTypes(data);
    });
  }, []);

  const seriesTypeHandler = (selectedTypes) => {
    setSelectedSeriesTypes(selectedTypes);
  };

  function nextPageHandler() {
    navigation.navigate("RegistrationFavoriteSeriesScreen");
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
          <SubTitle>{selectedSeriesTypes.length}/3+</SubTitle>
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
