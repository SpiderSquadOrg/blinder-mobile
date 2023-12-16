import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { useEffect, useState } from "react";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import SubTitle from "../../../components/ui/SubTitle";
import TextButton from "../../../components/Button/TextButton";
import TypesOptions from "../../../containers/Options/TypesOptions";
import getMovieCategories from "../../../api/characteristics/getMovieCategories";
import addMovieCategory from "../../../api/characteristics/addMovieCategory";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationMovieTypeScreen({ navigation }) {
  const [selectedMovieTypes, setSelectedMovieTypes] = useState([]);
  const [movieTypes, setMovieTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getMovieCategories().then((data) => {
      setMovieTypes(data);
    });
  }, []);

  const movieTypeHandler = (selectedTypes) => {
    setSelectedMovieTypes(selectedTypes);
  };

  function nextPageHandler() {
    setIsLoading(true);
    selectedMovieTypes.forEach(async (type) => {
      await addMovieCategory({ name: type });
    });
    setIsLoading(false);
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
          <TypesOptions onTypeSelect={movieTypeHandler} options={movieTypes} />
        </View>
        <View style={styles.buttonContainer}>
          <TextButton onPress={nextPageHandler} style={styles.textButton} disabled={isLoading}>
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
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    paddingRight: 28,
  },
});
