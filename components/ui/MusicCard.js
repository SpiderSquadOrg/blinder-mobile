import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  ScrollView,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function MusicCard({ musicList }) {
  return (
    <ScrollView horizontal>
      {musicList.map((music, index) => (
        <View key={index} style={styles.container}>
          <Image source={{ uri: music.imageUrl }} style={styles.musicImage} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{music.title}</Text>
            <Text style={styles.artist}>{music.artist}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

export default MusicCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  musicImage: {
    width: 60,
    height: 60,
    marginRight: screenWidth * 0.05,
    borderRadius: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  artist: {
    fontSize: 14,
    color: "#666",
  },
});
