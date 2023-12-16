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

function SeriesCard({ seriesList, onRemoveItemId }) {
  function handleRemoveSeries(id) {
    onRemoveItemId(id);
  }

  return (
    <ScrollView horizontal>
      {seriesList.map((series, index) => (
        <View key={index} style={styles.container}>
          <Image source={{ uri: series.image }} style={styles.seriesImage} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{series.name}</Text>
            <Text style={styles.year}>{series.year}</Text>
          </View>
          <Pressable onPress={() => handleRemoveSeries(series.imdbId)}>
            <Text style={styles.removeButton}>×</Text>
          </Pressable>
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
