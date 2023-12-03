import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Text,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function SeriesCard({ seriesList }) {
  return (
    <ScrollView horizontal>
      {seriesList.map((series, index) => (
        <View key={index} style={styles.container}>
          <Image source={{ uri: series.imageUrl }} style={styles.seriesImage} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{series.name}</Text>
            <Text style={styles.year}>{series.year}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

export default SeriesCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  seriesImage: {
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
