import React, { useState } from "react";
import { Dimensions, StyleSheet, View, ActivityIndicator } from "react-native";
import { Text } from "react-native";
import Colors from "../../constansts/Colors";
import SubTitle from "../../components/ui/SubTitle";
import PrimaryButton from "../../components/Button/PrimaryButton";
import EnterLocationContainer from "../../containers/EnterLocation";
import { Ionicons } from "@expo/vector-icons";
import { useLocation } from "../../contexts/LocationContext";

// Define your state variable
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function LocationPreferencesScreen({ navigation, route }) {
  const [isLocationEnabled, setIsLocationEnabled] = useState(false);
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [stateModalVisible, setStateModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { country, state, setCountry, setState } = useLocation();

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

  function handleCompleteButtonPress() {
    navigation.goBack();
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
          <View style={styles.completeButton}>
            <PrimaryButton onPress={handleCompleteButtonPress}>
              Tamamla
            </PrimaryButton>
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

export default LocationPreferencesScreen;

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
  completeButton: {
    marginTop: 20,
  },
});
