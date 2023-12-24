import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import { useEffect, useState } from "react";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import SubTitle from "../../../components/ui/SubTitle";
import TextButton from "../../../components/Button/TextButton";
import TypesOptions from "../../../containers/Options/TypesOptions";
import addHobby from "../../../api/characteristics/addHobby";
import getHobbies from "../../../api/characteristics/getHobbies";
import removeHobby from "../../../api/characteristics/removeHobby";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationHobbyTypeScreen({ navigation, route }) {
  const [selectedHobbyTypes, setSelectedHobbyTypes] = useState([]);
  const [hobbyList, setHobbyList] = useState([]);

  useEffect(() => {
    getHobbies().then((data) => {
      setHobbyList(data.content.map((hobby) => hobby.name));
    });
  }, []);

  const hobbyTypesHandler = async (selectedHobbies) => {
    const newHobbies = selectedHobbies.filter(
      (hobby) => !selectedHobbyTypes.includes(hobby)
    );
    const removedHobbies = selectedHobbyTypes.filter(
      (hobby) => !selectedHobbies.includes(hobby)
    );

    for (const hobby of newHobbies) {
      await addHobby({ name: hobby });
    }

    for (const hobby of removedHobbies) {
      await removeHobby({ name: hobby });
    }

    setSelectedHobbyTypes(selectedHobbies);
  };

  function nextPageHandler() {
    navigation.replace("Home");
  }

  return (
    <ScrollView>
      <View>
        <RegistrationQueryText style={styles.title}>
          HOBİLERİNİZ
        </RegistrationQueryText>
        <View>
          <SubTitle style={styles.subtitle}>
            Profilinize en az 3 Hobi ekleyin. Bu sayede sizinle aynı fikirde
            olan kişilerle etkileşim kurabilecek ve tanışabileceksiniz.
          </SubTitle>
          <SubTitle>{selectedHobbyTypes.length}/3+</SubTitle>
        </View>

        <View style={styles.hobbiesContainer}>
          <TypesOptions onTypeSelect={hobbyTypesHandler} options={hobbyList} />
        </View>

        <View style={styles.buttonContainer}>
          <TextButton onPress={nextPageHandler} style={styles.textButton}>
            Kaydı Tamamla
          </TextButton>
        </View>
      </View>
    </ScrollView>
  );
}

export default RegistrationHobbyTypeScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
  },
  subtitle: {
    fontWeight: "normal",
    marginTop: screenHeight * 0.02,
    marginHorizontal: screenWidth * 0.06,
  },
  buttonContainer: {
    marginVertical: screenHeight * 0.06,
    marginLeft: "auto",
    marginRight: 23
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 5,
  },
  hobbiesContainer: {
    marginTop: screenHeight * 0.03,
  },
});
