import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Text,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SubTitle from "../ui/SubTitle";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function ProfileMusicCard({ musicList, handlePressable }) {
  function handlePress() {
    handlePressable();
  }
  return (
    <View>
      <View style={styles.titleContainer}>
        <SubTitle style={{ color: "gray" }}>Müzik Listesi</SubTitle>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {musicList.map((music, index) => (
          <View style={styles.container} key={index}>
            <Image source={{ uri: music.imageUrl }} style={styles.musicImage} />
            <View style={styles.textContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{music.title}</Text>
                <Text style={styles.artist}>{music.artist}</Text>
              </View>
            </View>
          </View>
        ))}
        <Pressable onPress={handlePress} style={styles.icon}>
          <Ionicons name="md-pencil-sharp" size={18} color="gray" />
        </Pressable>
      </ScrollView>
    </View>
  );
}

export default ProfileMusicCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    height: screenHeight * 0.1,
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
  titleContainer: {
    alignItems: "flex-start",
    marginLeft: screenWidth * 0.05,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  artist: {
    fontSize: 14,
    color: "#666",
  },
  icon: {
    marginLeft: screenWidth * 0.02,
    marginTop: screenHeight * 0.02,
  },
});
