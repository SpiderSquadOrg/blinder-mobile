import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import searchMovies from "../../api/characteristics/searchMovies";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function MovieOptionsSearch({ selectedMovieList, setSelectedMovielist }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    if (searchQuery.length < 3) return;
    searchMovies(searchQuery, 10).then((data) => {
      setMovieList(data);
    });
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleMovieSelect = async (selectedMovie) => {
    const isMovieAlreadySelected = selectedMovieList.some(
      (movie) => movie.imdbId === selectedMovie.imdbId
    );

    if (!isMovieAlreadySelected) {
      await addMovie({ ...selectedMovie });
      setSelectedMovielist((prevList) => [...prevList, selectedMovie]);
    }
  };

  return (
    <View style={{ padding: screenWidth * 0.03 }}>
      <TextInput
        style={{
          height: screenHeight * 0.05,
          borderRadius: 8,
          borderColor: "gray",
          borderWidth: 1,
          backgroundColor: "#f8f8f8",
          marginBottom: screenHeight * 0.02,
          padding: 5,
        }}
        placeholder="Film Ara..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <ScrollView>
        {movieList.map((movie, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleMovieSelect(movie)}
            style={[
              styles.movieContainer,
              selectedMovieList.includes(movie) ? styles.selectedMovie : null,
            ]}
          >
            <View style={styles.listItems}>
              <View>
                <Image
                  source={{ uri: movie.image }}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 12,
                    marginRight: screenWidth * 0.03,
                  }}
                />
              </View>
              <View style={{ marginTop: screenHeight * 0.01 }}>
                <Text style={styles.nameText}>{movie.name}</Text>
                <Text style={styles.yearText}>{movie.year}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default MovieOptionsSearch;

const styles = StyleSheet.create({
  pressedButton: {
    opacity: 0.75,
  },
  listItems: {
    flexDirection: "row",
    marginVertical: screenHeight * 0.01,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  yearText: {
    fontSize: 14,
    color: "gray",
  },
  selectedMovie: {
    opacity: 0.75,
  },
});
