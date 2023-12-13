import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { useState, useEffect } from "react";

import SubTitle from "../../components/ui/SubTitle";
import MusicOptionsSearchBar from "../../components/Search/MusicOptionsSearchBar";
import MusicCard from "../../components/Card/MusicCard";
import { MusicList } from "../../data/data";
import { newUser } from "../../data/userData";
import TextButton from "../../components/Button/TextButton";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function UpdateMusicOptionsScreen({ navigation, route }) {
  const [selectedMusicList, setSelectedMusicList] = useState([]);
  const [chosenMusicList, setChosenMusicList] = useState(
    route.params.chosenMusicList
  );

  useEffect(() => {
    if (chosenMusicList) {
      const updatedSelectedMusicList = chosenMusicList.map((chosenMusic) => {
        const matchedMusic = MusicList.find(
          (music) =>
            music.title === chosenMusic.title &&
            music.artist === chosenMusic.artist
        );
        return matchedMusic || chosenMusic;
      });
      setSelectedMusicList(updatedSelectedMusicList);
    }
  }, [chosenMusicList]);

  function removeItemHandler(removeItemId) {
    setSelectedMusicList(
      selectedMusicList.filter((music) => music.id !== removeItemId)
    );
  }

  function nextPageHandler() {
    newUser.favoriteMusic = selectedMusicList;
    navigation.navigate("ProfileScreen");
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <SubTitle style={styles.musicListTitle}>Seçilen Müzikler</SubTitle>
        <SubTitle>{selectedMusicList.length}</SubTitle>
        <View>
          <MusicCard
            musicList={selectedMusicList}
            onRemoveItemId={removeItemHandler}
          />
        </View>
      </View>

      <View>
        <MusicOptionsSearchBar
          selectedMusicList={selectedMusicList}
          setSelectedMusicList={setSelectedMusicList}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TextButton onPress={nextPageHandler} style={styles.textButton}>
          Güncelle
        </TextButton>
      </View>
    </ScrollView>
  );
}

export default UpdateMusicOptionsScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 2,
  },
  subtitle: {
    fontWeight: "normal",
    marginTop: screenHeight * 0.02,
    marginHorizontal: screenWidth * 0.06,
  },
  musicListTitle: {
    marginTop: screenHeight * 0.04,
    marginHorizontal: screenWidth * 0.06,
    fontSize: 17,
  },
  buttonContainer: {
    marginLeft: "auto",
    marginVertical: screenHeight * 0.05,
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    paddingRight: 28,
  },
});
