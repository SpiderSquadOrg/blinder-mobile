import { View, StyleSheet, Dimensions, ScrollView, Text } from "react-native";
import { useState, useEffect } from "react";

import TypesOptions from "../../containers/Options/TypesOptions";
import TextButton from "../../components/Button/TextButton";
import { musicTypes } from "../../data/categoryData";
import { newUser } from "../../data/userData";
import Colors from "../../constansts/Colors";
import SubTitle from "../../components/ui/SubTitle";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function UpdateMusicCategoryScreen({ navigation, route }) {
  const [selectedMusicTypes, setSelectedMusicTypes] = useState([]);
  const [chosenMusicTypes, setChosenMusicTypes] = useState(
    route.params.chosenMusicTypes
  );

  useEffect(() => {
    if (chosenMusicTypes) {
      const updatedMusicTypes = chosenMusicTypes.map((chosenMusicType) => {
        const matchedMusicType = musicTypes.find(
          (musicType) => musicType === chosenMusicType
        );

        return matchedMusicType || chosenMusicType;
      });

      setSelectedMusicTypes(updatedMusicTypes);
    }
  }, [chosenMusicTypes]);

  const handleMusicTypeSelect = (selectedTypes) => {
    setSelectedMusicTypes(selectedTypes);
  };

  function nextPageHandler() {
    newUser.musicTypes = selectedMusicTypes;
    navigation.navigate("ProfileScreen");
  }

  return (
    <ScrollView>
      <View>
        <View style={styles.subtitle}>
          <SubTitle>Seçili Müzik Türleri</SubTitle>
        </View>
        <ScrollView horizontal>
          {selectedMusicTypes.map((type, index) => (
            <View style={styles.outerContainer} key={index}>
              <View style={styles.innerContainer}>
                <Text style={styles.title}>{type}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.musicContainer}>
          <TypesOptions
            onTypeSelect={handleMusicTypeSelect}
            options={musicTypes}
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

export default UpdateMusicCategoryScreen;

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
  musicContainer: {
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
