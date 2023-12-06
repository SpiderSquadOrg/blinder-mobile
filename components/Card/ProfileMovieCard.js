import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Text,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
import SubTitle from "../ui/SubTitle";

function ProfileMovieCard({ movieList }) {
  return (
    <View>
      <View style={styles.titleContainer}>
        <SubTitle style={{ color: "gray" }}>Film Listesi</SubTitle>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movieList.map((movie, index) => (
          <View style={styles.container} key={index}>
            <Image source={{ uri: movie.image }} style={styles.movieImage} />
            <View style={styles.textContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.name}>{movie.name}</Text>
                <Text style={styles.year}>{movie.year}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default ProfileMovieCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    height: screenHeight * 0.1,
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
  titleContainer: {
    alignItems: "flex-start",
    marginLeft: screenWidth * 0.05,
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
