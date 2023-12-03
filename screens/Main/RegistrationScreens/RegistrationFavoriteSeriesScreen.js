import { View, StyleSheet, Dimensions, ScrollView } from "react-native";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import SubTitle from "../../../components/ui/SubTitle";
import TextButton from "../../../components/Button/TextButton";
import SeriesCard from "../../../components/Card/SeriesCard";
import SeriesOptionsSearch from "../../../components/Search/SeriesOptionsSearch";
import { SeriesList } from "../../../data/data";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationFavoriteSeriesScreen({ navigation }) {
  const [selectedSeriesList, setSelectedSeriesList] = useState([]);

  function selectedSeriesHandler(seriesList) {
    setSelectedSeriesList(seriesList);
  }

  function nextPageHandler() {
    //navigation.navigate("");
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
        <SubTitle>0/3+</SubTitle>
      </View>

      <View>
        <SubTitle style={styles.seriesListTitle}>Seçilen Diziler</SubTitle>
        <View>
          <SeriesCard seriesList={selectedSeriesList} />
        </View>
      </View>

      <View>
        <SeriesOptionsSearch
          seiresData={SeriesList}
          onSelected={selectedSeriesHandler}
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
    arginTop: screenHeight * 0.04,
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
