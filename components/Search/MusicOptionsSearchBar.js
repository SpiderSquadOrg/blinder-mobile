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
import searchMusics from "../../api/characteristics/searchMusics";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function OptionSearchBar({
  selectedMusicList,
  setSelectedMusicList,
}) {
  const [searchQuery, setSearchQuery] = useState("");;
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    if(searchQuery.length < 1) return;
    searchMusics(searchQuery, 10).then((data) => {
      setMusicList(data.map((music)=>({
          id: music.spotifyId,
          title: music.name,
          artist: music.artists[0],
          imageUrl: music.image,
      })));
    });
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleMusicSelect = (selectedMusic) => {
    const isMusicAlreadySelected = selectedMusicList.some(
      (music) => music.id === selectedMusic.id
    );

    if (!isMusicAlreadySelected) {
      setSelectedMusicList([...selectedMusicList, selectedMusic]);
    }
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
        placeholder="Müzik Ara..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <ScrollView>
        {musicList.map((music, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleMusicSelect(music)}
            style={[
              styles.musicContainer,
              selectedMusicList.includes(music) ? styles.selectedMusic : null,
            ]}
          >
            <View style={styles.listItems}>
              <View>
                <Image
                  source={{ uri: music.imageUrl }}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 12,
                    marginRight: screenWidth * 0.03,
                  }}
                />
              </View>
              <View style={{ marginTop: screenHeight * 0.01 }}>
                <Text style={styles.titleText}>{music.title}</Text>
                <Text style={styles.artistText}>{music.artist}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default OptionSearchBar;

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
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  artistText: {
    fontSize: 14,
    color: "gray",
  },
  selectedMusic: {
    opacity: 0.75,
  },
});
