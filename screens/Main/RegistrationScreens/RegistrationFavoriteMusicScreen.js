import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { useState, useEffect } from "react";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import SubTitle from "../../../components/ui/SubTitle";
import TextButton from "../../../components/Button/TextButton";
import MusicOptionsSearchBar from "../../../components/Search/MusicOptionsSearchBar";
import MusicCard from "../../../components/Card/MusicCard";
import { MusicList } from "../../../data/data";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationFavoriteMusicScreen({ navigation }) {
  const [selectedMusicList, setSelectedMusicList] = useState([]);

  function removeItemHandler(removeItemId) {
    setSelectedMusicList(
      selectedMusicList.filter((music) => music.id !== removeItemId)
    );
  }

  function nextPageHandler() {
    navigation.navigate("RegistrationMovieTypeScreen");
  }

  return (
    <ScrollView style={styles.container}>
      <RegistrationQueryText style={styles.title}>
        SEVDİĞİNİZ MÜZİKLER
      </RegistrationQueryText>
      <View>
        <SubTitle style={styles.subtitle}>
          Profilinize en az 3 müzik ekleyin. Bu sayede sizinle aynı fikirde olan
          kişilerle etkileşim kurabilecek ve tanışabileceksiniz.
        </SubTitle>
      </View>
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
          musicData={MusicList}
          selectedMusicList={selectedMusicList}
          setSelectedMusicList={setSelectedMusicList}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TextButton onPress={nextPageHandler} style={styles.textButton}>
          İleri
        </TextButton>
      </View>
    </ScrollView>
  );
}

export default RegistrationFavoriteMusicScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 2,
  },
  subtitle: {
    fontWeight: "normal",
    marginTop: screenHeight * 0.02,
    marginHorizontal: screenWidth * 0.06,
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
  musicListTitle: {
    marginTop: screenHeight * 0.04,
    marginHorizontal: screenWidth * 0.06,
    fontSize: 17,
  },
});
