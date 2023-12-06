import { View, StyleSheet, Dimensions, Button, Text } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../../../constansts/Colors";
import SubTitle from "../../../components/ui/SubTitle";
import TextButton from "../../../components/Button/TextButton";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationLocationScreen({ navigation }) {
  const [isLocationEnabled, setIsLocationEnabled] = useState(false);

  function nextPageHandler() {}

  function handleLocationButtonPress() {
    setIsLocationEnabled(!isLocationEnabled);
  }

  return (
    <View>
      <View style={styles.titleContainer}>
        <SubTitle style={styles.title}>KONUMUNU ETKİNLEŞTİR</SubTitle>
        <SubTitle style={styles.subtitle}>Yakındaki kişilerle tanış</SubTitle>
        <View style={styles.locationIcon}>
          <Ionicons name="location-outline" size={24} color="white" />
        </View>
      </View>

      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>
          {isLocationEnabled ? "Konum Açık" : "Konum Kapalı"}
        </Text>
        <View style={styles.locationButton}>
          <Button
            title={isLocationEnabled ? "Kapat" : "Aç"}
            onPress={handleLocationButtonPress}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TextButton onPress={nextPageHandler} style={styles.textButton}>
          İleri
        </TextButton>
      </View>
    </View>
  );
}

export default RegistrationLocationScreen;

const styles = StyleSheet.create({
  titleContainer: {
    height: screenHeight * 0.4,
    backgroundColor: Colors.primary600,
  },
  locationIcon: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: screenHeight * 0.03,
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
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    paddingRight: 28,
  },
});
