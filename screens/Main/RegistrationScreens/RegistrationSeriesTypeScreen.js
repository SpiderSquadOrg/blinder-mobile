import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { useEffect, useState } from "react";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import SubTitle from "../../../components/ui/SubTitle";
import TypesOptions from "../../../containers/Options/TypesOptions";
import getSeriesCategories from "../../../api/characteristics/getSeriesCategories";
import TextButton from "../../../components/Button/TextButton";
import addTvSeriesCategory from "../../../api/characteristics/addTvSeriesCategory";
import removeTvSeriesCategory from "../../../api/characteristics/removeTvSeriesCategory";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationSeriesTypeScreen({ navigation }) {
  const [selectedSeriesTypes, setSelectedSeriesTypes] = useState([]);
  const [seriesTypes, setSeriesTypes] = useState([]);

  useEffect(() => {
    getSeriesCategories().then((data) => {
      setSeriesTypes(data);
    });
  }, []);

  const seriesTypeHandler = async (selectedTypes) => {
    const newTypes = selectedTypes.filter(
      (type) => !selectedSeriesTypes.includes(type)
    );
    const removedTypes = selectedSeriesTypes.filter(
      (type) => !selectedTypes.includes(type)
    );

    for (const type of newTypes) {
      await addTvSeriesCategory({ name: type });
    }

    for (const type of removedTypes) {
      await removeTvSeriesCategory({ name: type });
    }

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
    marginRight: 23,
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 5,
  },
});
