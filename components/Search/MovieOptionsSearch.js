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

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function MovieOptionsSearch({ movieData, onSelected }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovie, setFilteredMovie] = useState(movieData.slice(0, 9));
  const [selectedMovieList, setSelectedMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    onSelected(selectedMovieList);
  }, [selectedMovieList]);

  const handleSearch = (query) => {
    const filtered = movieData.filter((movie) =>
      movie.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovie(filtered.slice(0, 9));
    setSearchQuery(query);
  };

  const handleMovieSelect = (selectedMovie) => {
    setSelectedMovieList((prevList) => [...prevList, selectedMovie]);
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
        {filteredMovie.map((movie, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleMovieSelect(movie)}
            style={[
              styles.movieContainer,
              selectedMovie === movie ? styles.selectedMovie : null,
            ]}
          >
            <View style={styles.listItems}>
              <View>
                <Image
                  source={{ uri: movie.imageUrl }}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
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
