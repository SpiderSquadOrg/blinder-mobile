import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { useState, useEffect } from "react";

import SubTitle from "../../components/ui/SubTitle";
import SeriesCard from "../../components/Card/SeriesCard";
import SeriesOptionsSearch from "../../components/Search/SeriesOptionsSearch";
import { SeriesList } from "../../data/data";
import { newUser } from "../../data/userData";
import TextButton from "../../components/Button/TextButton";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function UpdateSeriesOptionsScreen({ navigation, route }) {
  const [selectedSeriesList, setSelectedSeriesList] = useState([]);
  const [chosenSeriesList, setChosenSeriesList] = useState(
    route.params.chosenSeriesList
  );

  useEffect(() => {
    if (chosenSeriesList) {
      const updatedSelectedSeriesList = chosenSeriesList.map((chosenSeries) => {
        const matchedSeries = SeriesList.find(
          (series) =>
            series.name === chosenSeries.name &&
            series.year === chosenSeries.year
        );
        return matchedSeries || chosenSeries;
      });
      setSelectedSeriesList(updatedSelectedSeriesList);
    }
  }, [chosenSeriesList]);

  function removeItemHandler(removeItemId) {
    setSelectedSeriesList(
      selectedSeriesList.filter((series) => series.id !== removeItemId)
    );
  }

  function nextPageHandler() {
    newUser.favoriteSeries = selectedSeriesList;
    navigation.navigate("ProfileScreen");
  }

  return (
    <ScrollView>
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
          seiresData={SeriesList}
          selectedSeriesList={selectedSeriesList}
          setSelectedSeriesList={setSelectedSeriesList}
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

export default UpdateSeriesOptionsScreen;

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
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    paddingRight: 28,
  },
});
