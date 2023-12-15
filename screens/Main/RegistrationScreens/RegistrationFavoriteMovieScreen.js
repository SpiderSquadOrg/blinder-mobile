import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { useState } from "react";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import TextButton from "../../../components/Button/TextButton";
import SubTitle from "../../../components/ui/SubTitle";
import MovieCard from "../../../components/Card/MovieCard";
import MovieOptionsSearch from "../../../components/Search/MovieOptionsSearch";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationFavoriteMovieScreen({ navigation }) {
  const [selectedMovieList, setSelectedMovieList] = useState([]);

  function removeItemHandler(removeItemId) {
    setSelectedMovieList(
      selectedMovieList.filter((movie) => movie.id !== removeItemId)
    );
  }

  function nextPageHandler() {
    navigation.navigate("RegistrationSeriesTypeScreen");
  }


  return (
    <ScrollView>
      <RegistrationQueryText style={styles.title}>
        SEVDİĞİNİZ FİLMLER
      </RegistrationQueryText>
      <View>
        <SubTitle style={styles.subtitle}>
          Profilinize en az 3 film ekleyin. Bu sayede sizinle aynı fikirde olan
          kişilerle etkileşim kurabilecek ve tanışabileceksiniz.{" "}
        </SubTitle>
      </View>

      <View>
        <SubTitle style={styles.movieListTitle}>Seçilen Fimler</SubTitle>
        <SubTitle>{selectedMovieList.length}</SubTitle>
        <View>
          <MovieCard
            movieList={selectedMovieList}
            onRemoveItemId={removeItemHandler}
          />
        </View>
      </View>
      <MovieOptionsSearch
        selectedMovieList={selectedMovieList}
        setSelectedMovielist={setSelectedMovieList}
      />
       <View style={styles.buttonContainer}>
        <TextButton onPress={nextPageHandler} style={styles.textButton}>
          İleri
        </TextButton>
      </View>
    </ScrollView>
  );
}

export default RegistrationFavoriteMovieScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 2,
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
