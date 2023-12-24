import { View, StyleSheet, Dimensions } from "react-native";
import { useEffect, useState } from "react";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import GenderFilter from "../../../containers/GenderFilter/index";
import TextButton from "../../../components/Button/TextButton";
import getGenders from "../../../api/gender/getGenders";
import updateFilterByUserId from "../../../api/filter/updateFilterByUserId";
import { BackHandler } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationPartnerGenderScreen({ navigation, route }) {
  const [genders, setGenders] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);

  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    getGenders()
      .then((res) => {
        setGenders(res.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const gendersHandler = (gender) => {
    setSelectedGenders((prevGenders) =>
      prevGenders.some((g) => g.id === gender.id)
        ? prevGenders.filter((g) => g.id !== gender.id)
        : [...prevGenders, gender]
    );
  };

  async function nextPageHandler() {
    await updateFilterByUserId(route.params.user.id, {
      genders: selectedGenders,
    });
    navigation.navigate("RegistrationMusicTypeScreen");
  }

  return (
    <View>
      <RegistrationQueryText>KİMİNLE TANIŞMAK İSTERSİN ?</RegistrationQueryText>
      <View style={styles.genderContainer}>
        <GenderFilter
          genders={genders}
          gendersHandler={gendersHandler}
          selectedGenders={selectedGenders}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TextButton onPress={nextPageHandler} style={styles.textButton}>
          İleri
        </TextButton>
      </View>
    </View>
  );
}

export default RegistrationPartnerGenderScreen;

const styles = StyleSheet.create({
  genderContainer: {
    marginTop: screenHeight * 0.06,
    marginLeft: screenWidth * 0.09,
  },
  buttonContainer: {
    marginTop: screenHeight * 0.06,
    marginLeft: "auto",
    marginRight: 23,
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 5,
  },
});
