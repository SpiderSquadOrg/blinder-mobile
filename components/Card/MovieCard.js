import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Text,
  Pressable,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function FilmCard({ movieList, onRemoveItemId }) {
  function handleRemoveMovie(id) {
    onRemoveItemId(id);
  }

  return (
    <ScrollView horizontal>
      {movieList.map((movie, index) => (
        <View key={index} style={styles.container}>
          <Image source={{ uri: movie.imageUrl }} style={styles.movieImage} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{movie.name}</Text>
            <Text style={styles.year}>{movie.year}</Text>
          </View>
          <Pressable onPress={() => handleRemoveMovie(movie.id)}>
            <Text style={styles.removeButton}>×</Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
}

export default FilmCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  movieImage: {
    width: 50,
    height: 50,
    marginRight: screenWidth * 0.05,
    borderRadius: 50,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  year: {
    fontSize: 14,
    color: "#666",
  },
  removeButton: {
    fontSize: 30,
    color: "red",
    marginLeft: 10,
  },
});
