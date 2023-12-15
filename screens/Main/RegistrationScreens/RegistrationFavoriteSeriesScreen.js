import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { useState } from "react";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import SubTitle from "../../../components/ui/SubTitle";
import SeriesCard from "../../../components/Card/SeriesCard";
import SeriesOptionsSearch from "../../../components/Search/SeriesOptionsSearch";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationFavoriteSeriesScreen({ navigation }) {
  const [selectedSeriesList, setSelectedSeriesList] = useState([]);

  function removeItemHandler(removeItemId) {
    setSelectedSeriesList(
      selectedSeriesList.filter((series) => series.id !== removeItemId)
    );
  }

  return (
    <ScrollView>
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
});
