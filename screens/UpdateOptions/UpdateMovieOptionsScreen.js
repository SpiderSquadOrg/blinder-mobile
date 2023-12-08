import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { useState, useEffect } from "react";

import SubTitle from "../../components/ui/SubTitle";
import { MovieList } from "../../data/data";
import { newUser } from "../../data/userData";
import TextButton from "../../components/Button/TextButton";
import MovieCard from "../../components/Card/MovieCard";
import MovieOptionsSearch from "../../components/Search/MovieOptionsSearch";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function UpdateMovieOptionsScreen({ navigation, route }) {
  const [selectedMovieList, setSelectedMovieList] = useState([]);
  const [chosenMovieList, setChosenMovieList] = useState(
    route.params.chosenMovieList
  );

  useEffect(() => {
    if (chosenMovieList) {
      const updatedSelectedMovieList = chosenMovieList.map((chosenMovie) => {
        const matchedMovie = MovieList.find(
          (movie) =>
            movie.name === chosenMovie.name && movie.year === chosenMovie.year
        );
        return matchedMovie || chosenMovie;
      });
      setSelectedMovieList(updatedSelectedMovieList);
    }
  }, [chosenMovieList]);

  function removeItemHandler(removeItemId) {
    setSelectedMovieList(
      selectedMovieList.filter((movie) => movie.id !== removeItemId)
    );
  }

  function nextPageHandler() {
    newUser.favoriteMovies = selectedMovieList;
    navigation.navigate("ProfileScreen");
  }

  return (
    <ScrollView>
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
        movieData={MovieList}
        selectedMovieList={selectedMovieList}
        setSelectedMovielist={setSelectedMovieList}
      />

      <View style={styles.buttonContainer}>
        <TextButton onPress={nextPageHandler} style={styles.textButton}>
          Güncelle
        </TextButton>
      </View>
    </ScrollView>
  );
}

export default UpdateMovieOptionsScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 2,
  },
  subtitle: {
    fontWeight: "normal",
    marginTop: screenHeight * 0.02,
    marginHorizontal: screenWidth * 0.06,
  },
  movieListTitle: {
    marginTop: screenHeight * 0.04,
    marginHorizontal: screenWidth * 0.06,
    fontSize: 17,
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
