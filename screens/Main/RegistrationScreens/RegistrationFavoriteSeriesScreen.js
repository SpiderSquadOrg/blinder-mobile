import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { useState, useEffect } from "react";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import SubTitle from "../../../components/ui/SubTitle";
import TextButton from "../../../components/Button/TextButton";
import SeriesOptionsSearch from "../../../components/Search/SeriesOptionsSearch";
import SeriesCard from "../../../components/Card/SeriesCard";
import addTvSeries from "../../../api/characteristics/addTvSeries";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationFavoriteSeriesScreen({ navigation, route }) {
  const [selectedSeriesList, setSelectedSeriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const removeItemHandler = async (removeItemId) => {
    setSelectedSeriesList(
      selectedSeriesList.filter((series) => series.imdbId !== removeItemId)
    );
  };

  async function nextPageHandler() {
    setIsLoading(true);
    selectedSeriesList.forEach(async (series) => {
      await addTvSeries({
        imdbId: series.imdbId,
        name: series.name,
        year: series.year,
        image: series.image,
      })
        .then(() => console.log("Added"))
        .catch((err) => {
          console.log(err);
        });
    });
    setIsLoading(false);
    navigation.replace("RegistrationHobbyTypeScreen");
  }

  return (
    <ScrollView style={styles.container}>
      <RegistrationQueryText style={styles.title}>
        SEVDİĞİNİZ DİZİLER
      </RegistrationQueryText>
      <View>
        <SubTitle style={styles.subtitle}>
          Profilinize en az 3 dizi ekleyin. Bu sayede sizinle aynı fikirde olan
          kişilerle etkileşim kurabilecek ve tanışabileceksiniz.
        </SubTitle>
      </View>
      <View>
        <SubTitle style={styles.seriesListTitle}>Seçilen Diziler</SubTitle>
        <SubTitle>{selectedSeriesList.length}</SubTitle>
        <View>
          <SeriesCard
            seriesList={selectedSeriesList}
            onRemoveItemId={removeItemHandler}
          />
        </View>
      </View>

      <View>
        <SeriesOptionsSearch
          selectedSeriesList={selectedSeriesList}
          setSelectedSeriesList={setSelectedSeriesList}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TextButton
          onPress={nextPageHandler}
          style={styles.textButton}
          disabled={isLoading}
        >
          İleri
        </TextButton>
      </View>
    </ScrollView>
  );
}

export default RegistrationFavoriteSeriesScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 2,
  },
  subtitle: {
    fontWeight: "normal",
    marginTop: screenHeight * 0.02,
    marginHorizontal: screenWidth * 0.06,
  },
  seriesListTitle: {
    marginTop: screenHeight * 0.04,
    marginHorizontal: screenWidth * 0.06,
    fontSize: 17,
  },
  buttonContainer: {
    marginLeft: "auto",
    marginVertical: screenHeight * 0.05,
    marginRight: 23,
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 5,
  },
});
