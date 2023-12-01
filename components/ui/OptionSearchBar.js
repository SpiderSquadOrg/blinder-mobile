import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Text,
  Dimensions,
  TextInput,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function OptionSearchBar({ type, musicData }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMusic, setFilteredMusic] = useState([]);
  const [selectedMusicList, setSelectedMusicList] = useState([]);

  const handleSearch = (query) => {
    const filtered = musicData.filter((music) =>
      music.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMusic(filtered);
    setSearchQuery(query);
  };

  const renderMusicItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleMusicSelect(item)}
      style={({ pressed }) => [
        styles.button,
        pressed ? styles.pressedButton : null,
      ]}
    >
      <View
        style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
      >
        <Text>{item.title}</Text>
        <Text style={{ color: "#888" }}>{item.artist}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleMusicSelect = (selectedMusic) => {
    // Seçilen müziği seçilen listeye ekleyin
    setSelectedMusicList((prevList) => [...prevList, selectedMusic]);
    console.log(selectedMusic);
  };

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 5,
        }}
        placeholder="Müzik Ara..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={searchQuery.length > 0 ? filteredMusic : musicData}
        renderItem={renderMusicItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default OptionSearchBar;

const styles = StyleSheet.create({
  pressedButton: {
    opacity: 0.75,
  },
});
