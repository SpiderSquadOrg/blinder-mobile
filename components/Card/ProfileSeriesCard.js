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

function ProfileSeriesCard({ seriesList }) {
  return (
    <View>
      <View style={styles.titleContainer}>
        <SubTitle style={{ color: "gray" }}>Dizi Listesi</SubTitle>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {seriesList.map((series, index) => (
          <View style={styles.container} key={index}>
            <Image source={{ uri: series.image }} style={styles.seriesImage} />
            <View style={styles.textContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.name}>{series.name}</Text>
                <Text style={styles.year}>{series.year}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default ProfileSeriesCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    height: screenHeight * 0.1,
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
