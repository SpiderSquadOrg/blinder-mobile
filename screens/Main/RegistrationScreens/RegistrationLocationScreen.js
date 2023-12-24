import { View, StyleSheet, Dimensions, Text } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../../constansts/Colors";
import SubTitle from "../../../components/ui/SubTitle";
import TextButton from "../../../components/Button/TextButton";
import EnterLocationContainer from "../../../containers/EnterLocation";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import register from "../../../api/auth/register";
import fetchChats from "../../../api/chat/fetchChats";
import { storeData } from "../../../utils/storage";
import { ActivityIndicator } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationLocationScreen({ navigation, route }) {
  const [isLocationEnabled, setIsLocationEnabled] = useState(false);
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [stateModalVisible, setStateModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //const { resetUser } = useUser();
  /*
  useEffect(() => {
    if(user){
      navigation.navigate("Home");
    }
  }, []);*/

  function handleLocationButtonPress() {
    setIsLocationEnabled(!isLocationEnabled);
  }

  function handleCountryButtonPress() {
    setCountryModalVisible(true);
  }

  function handleStateButtonPress() {
    if (country != null) {
      setStateModalVisible(true);
    }
  }

  async function nextPageHandler() {
    if (!(country && state)) {
      alert("Please fill in all fields");
      return;
    }
    setIsLoading(true);
    //await removeData("userInfo");
    await register(
      route.params.user.username,
      route.params.user.password,
      route.params.user.email,
      route.params.user.name,
      route.params.user.surname,
      route.params.user.nickname,
      route.params.user.phoneNumber,
      route.params.user.genderId,
      route.params.user.birthDate,
      route.params.user.image,
      country.iso2,
      state.iso2
    ).then((res) => {
      let token = res.token;
      //extract userId from token
      let userId = token.split(".")[1];
      userId = JSON.parse(atob(userId)).userId;

      storeData("userInfo", token);

      fetchChats();
      navigation.replace("RegistrationPartnerGenderScreen", {
        user: {
          id: userId,
        },
      });
    });

    setIsLoading(false);
  }

  return (
    <>
      {isLoading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}
      {!isLoading && (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <SubTitle style={styles.subtitle}>
              Yakındaki kişilerle tanış
            </SubTitle>
            <View style={styles.locationIcon}>
              <Ionicons name="location-outline" size={24} color="white" />
            </View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Seçili Bilgiler</Text>

            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Ülke:</Text>
              <View style={styles.infoValueContainer}>
                <Text style={styles.infoValue}>{country?.countryName}</Text>
                <PrimaryButton onPress={handleCountryButtonPress}>
                  Ülke Seç
                </PrimaryButton>
              </View>
            </View>

            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Şehir:</Text>
              <View style={styles.infoValueContainer}>
                <Text style={styles.infoValue}>{state?.stateName}</Text>
                <PrimaryButton onPress={handleStateButtonPress}>
                  Şehir Seç
                </PrimaryButton>
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TextButton
              onPress={nextPageHandler}
              style={styles.textButton}
              disabled={isLoading}
            >
              Kaydı Tamamla
            </TextButton>
          </View>
          <View style={styles.locationContainer}>
            <EnterLocationContainer
              country={country}
              state={state}
              isLocationEnabled={isLocationEnabled}
              setCountry={setCountry}
              setState={setState}
              countryModalVisible={countryModalVisible}
              setCountryModalVisible={setCountryModalVisible}
              stateModalVisible={stateModalVisible}
              setStateModalVisible={setStateModalVisible}
            />
          </View>
        </View>
      )}
    </>
  );
}

export default RegistrationLocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleContainer: {
    backgroundColor: Colors.primary600,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  locationIcon: {
    marginTop: 20,
    marginBottom: 20,
  },
  subtitle: {
    color: "white",
  },
  infoContainer: {
    marginTop: 20,
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 10,
  },
  infoText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  infoValueContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  infoValue: {
    fontSize: 16,
  },
  locationContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 55,
    marginLeft: "auto",
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 1000, // Ensure it covers the entire screen height
  },
});
