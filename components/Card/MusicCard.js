import { useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  ScrollView,
  Pressable,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function MusicCard({ musicList, onRemoveItemId }) {
  function handleRemoveMusic(id) {
    onRemoveItemId(id);
  }

  return (
    <ScrollView horizontal>
      {musicList.map((music, index) => (
        <View key={index} style={styles.container}>
          <Image source={{ uri: music.image }} style={styles.musicImage} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{music.name}</Text>
            <Text style={styles.artist}>{music.artist}</Text>
          </View>
          <Pressable
            onPress={() => {
              console.log("music.spotifyId");
              handleRemoveMusic(music.spotifyId);
            }}
          >
            <Text style={styles.removeButton}>×</Text>
          </Pressable>
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
    width: 50,
    height: 50,
    marginRight: screenWidth * 0.05,
    borderRadius: 50,
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
  removeButton: {
    fontSize: 30,
    color: "red",
    marginLeft: 10,
  },
});
