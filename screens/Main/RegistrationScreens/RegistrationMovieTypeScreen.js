import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { useEffect, useState } from "react";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import SubTitle from "../../../components/ui/SubTitle";
import TextButton from "../../../components/Button/TextButton";
import TypesOptions from "../../../containers/Options/TypesOptions";
import getMovieCategories from "../../../api/characteristics/getMovieCategories";
import addMovieCategory from "../../../api/characteristics/addMovieCategory";
import removeMovieCategory from "../../../api/characteristics/removeMovieCategory";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationMovieTypeScreen({ navigation }) {
  const [selectedMovieTypes, setSelectedMovieTypes] = useState([]);
  const [movieTypes, setMovieTypes] = useState([]);

  useEffect(() => {
    getMovieCategories().then((data) => {
      setMovieTypes(data);
    });
  }, []);

  const handleMovieTypeSelect = async (selectedTypes) => {
    const newTypes = selectedTypes.filter(
      (type) => !selectedMovieTypes.includes(type)
    );
    const removedTypes = selectedMovieTypes.filter(
      (type) => !selectedTypes.includes(type)
    );

    for (const type of newTypes) {
      await addMovieCategory({ name: type });
    }

    for (const type of removedTypes) {
      await removeMovieCategory({ name: type });
    }

    setSelectedMovieTypes(selectedTypes);
  };

  function nextPageHandler() {
    navigation.navigate("RegistrationFavoriteMovieScreen");
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
          <SubTitle>{selectedMovieTypes.length}/3+</SubTitle>
        </View>
        <View style={styles.movieContainer}>
          <TypesOptions
            onTypeSelect={handleMovieTypeSelect}
            options={movieTypes}
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
  movieContainer: {
    marginTop: screenHeight * 0.03,
  },
  buttonContainer: {
    marginLeft: "auto",
    marginVertical: screenHeight * 0.05,
    marginRight: 23,
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 5,
  },
});
