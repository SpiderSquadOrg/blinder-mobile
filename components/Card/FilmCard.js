import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Text,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function FilmCard({ movieList }) {
  return (
    <ScrollView horizontal>
      {movieList.map((movie, index) => (
        <View key={index} style={styles.container}>
          <Image source={{ uri: movie.imageUrl }} style={styles.movieImage} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{movie.name}</Text>
            <Text style={styles.year}>{movie.year}</Text>
          </View>
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
    width: 60,
    height: 60,
    marginRight: screenWidth * 0.05,
    borderRadius: 12,
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
});
