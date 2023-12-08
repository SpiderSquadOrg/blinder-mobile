import { View, StyleSheet, Dimensions, ScrollView, Text } from "react-native";
import { useState, useEffect } from "react";

import TypesOptions from "../../containers/Options/TypesOptions";
import TextButton from "../../components/Button/TextButton";
import { movieTypes } from "../../data/categoryData";
import { newUser } from "../../data/userData";
import Colors from "../../constansts/Colors";
import SubTitle from "../../components/ui/SubTitle";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function UpdateMovieCategoryScreen({ navigation, route }) {
  const [selectedMovieTypes, setSelectedMovieTypes] = useState([]);
  const [chosenMovieTypes, setChosenMovieTypes] = useState(
    route.params.chosenMovieTypes
  );

  useEffect(() => {
    if (chosenMovieTypes) {
      const updatedMusicTypes = chosenMovieTypes.map((chosenMovieType) => {
        const matchedMovieType = movieTypes.find(
          (movieType) => movieType === chosenMovieType
        );

        return matchedMovieType || chosenMovieTypes;
      });

      setSelectedMovieTypes(updatedMusicTypes);
    }
  }, [chosenMovieTypes]);

  const handleMovieTypeSelect = (selectedTypes) => {
    setSelectedMovieTypes(selectedTypes);
  };

  function nextPageHandler() {
    newUser.movieTypes = selectedMovieTypes;
    navigation.navigate("ProfileScreen");
  }

  return (
    <ScrollView>
      <View>
        <View style={styles.subtitle}>
          <SubTitle>Seçili Film Türleri</SubTitle>
        </View>
        <ScrollView horizontal>
          {selectedMovieTypes.map((type, index) => (
            <View style={styles.outerContainer} key={index}>
              <View style={styles.innerContainer}>
                <Text style={styles.title}>{type}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.movieContainer}>
          <TypesOptions
            onTypeSelect={handleMovieTypeSelect}
            options={movieTypes}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TextButton onPress={nextPageHandler} style={styles.textButton}>
            Güncelle
          </TextButton>
        </View>
      </View>
    </ScrollView>
  );
}

export default UpdateMovieCategoryScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
  },
  subtitle: {
    fontWeight: "normal",
    alignItems: "flex-start",
    marginTop: screenHeight * 0.03,
    marginLeft: screenWidth * 0.05,
  },
  buttonContainer: {
    marginVertical: screenHeight * 0.06,
    marginLeft: "auto",
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    paddingRight: 28,
  },
  movieContainer: {
    marginTop: screenHeight * 0.03,
  },
  outerContainer: {
    borderRadius: 28,
    margin: 8,
    overflow: "hidden",
    borderColor: Colors.accent500,
    borderWidth: 1,
    backgroundColor: "#e6dcdc",
    marginTop: screenHeight * 0.02,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    height: screenHeight * 0.05,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
