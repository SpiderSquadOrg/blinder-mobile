import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import { useState } from "react";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import SubTitle from "../../../components/ui/SubTitle";
import TextButton from "../../../components/Button/TextButton";
import TypesOptions from "../../../containers/Options/TypesOptions";
import { hobbyList } from "../../../data/categoryData";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationHobbyTypeScreen({ navigation }) {
  const [selectedHobbyTypes, setSelectedHobbyTypes] = useState([]);

  const hobbyTypesHandler = (selectedHobbies) => {
    setSelectedHobbyTypes(selectedHobbies);
  };

  function nextPageHandler() {}

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
          <SubTitle>0/3+</SubTitle>
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
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    paddingRight: 28,
  },
  hobbiesContainer: {
    marginTop: screenHeight * 0.03,
  },
});
