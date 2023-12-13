import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  Text,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../../constansts/Colors";
import SubTitle from "../../../components/ui/SubTitle";
import TextButton from "../../../components/Button/TextButton";
import EnterLocationContainer from "../../../containers/EnterLocation";
import PrimaryButton from "../../../components/Button/PrimaryButton";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationLocationScreen({ navigation }) {
  const [isLocationEnabled, setIsLocationEnabled] = useState(false);
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);

  function handleLocationButtonPress() {
    setIsLocationEnabled(!isLocationEnabled);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      flex={1}
    >
      <ScrollView>
        <View style={styles.titleContainer}>
          <SubTitle style={styles.subtitle}>Yakındaki kişilerle tanış</SubTitle>
          <View style={styles.locationIcon}>
            <Ionicons name="location-outline" size={24} color="white" />
          </View>
          {country != null ? (
            <SubTitle style={{ color: "white" }}>Seçili Bilgiler</SubTitle>
          ) : null}

          {country != null ? (
            <View style={styles.header}>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
              >
                Ülke: {country.countryName}
              </Text>
              <PrimaryButton
                onPress={() => {
                  setCountry(null);
                  setState(null);
                }}
              >
                Ülkeyi Değiştir
              </PrimaryButton>
              {state != null ? (
                <View style={styles.header}>
                  <Text
                    style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
                  >
                    Şehir: {state.stateName}
                  </Text>
                  <PrimaryButton onPress={() => setState(null)}>
                    Şehri Değiştir
                  </PrimaryButton>
                </View>
              ) : null}
            </View>
          ) : null}
        </View>

        <View style={styles.locationContainer}>
          <EnterLocationContainer
            country={country}
            state={state}
            isLocationEnabled={isLocationEnabled}
            setCountry={setCountry}
            setState={setState}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default RegistrationLocationScreen;

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: Colors.primary600,
  },
  locationIcon: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: screenHeight * 0.03,
    marginBottom: screenHeight * 0.03,
  },
  title: {
    color: "white",
    fontSize: 23,
    marginTop: screenHeight * 0.1,
  },
  subtitle: {
    color: "white",
    marginTop: screenHeight * 0.02,
  },
  locationContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: screenHeight * 0.07,
  },
  locationText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  locationButton: {
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    margin: screenHeight * 0.02,
  },
  buttonContainer: {
    marginVertical: screenHeight * 0.15,
    marginLeft: "auto",
    marginBottom: screenHeight * 0.25,
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    paddingRight: 28,
  },
  header: {
    marginBottom: screenHeight * 0.02,
    alignItems: "center",
  },
});
