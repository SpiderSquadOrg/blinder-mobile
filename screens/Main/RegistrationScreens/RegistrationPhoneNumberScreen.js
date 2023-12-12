import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Alert, Dimensions } from "react-native";
import PhoneInput from "react-native-phone-input";
import CountryPicker from "react-native-country-picker-modal";

import TextButton from "../../../components/Button/TextButton";
import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationPhoneNumberScreen({ navigation }) {
  const phoneInputRef = useRef(null);
  const countryPickerRef = useRef(null);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {}, [selectedCountry]);

  const selectCountry = (value) => {
    phoneInputRef.current.selectCountry(value.cca2);
    setSelectedCountry(value);
  };

  const nextPageHandler = () => {
    Alert.alert(
      "Form Submitted",
      `Phone Number: ${phoneNumber}\nCountry Code: ${countryCode}`
    );
    navigation.navigate("RegistrationPartnerGenderScreen");
  };

  return (
    <View>
      <RegistrationQueryText>TELEFON NUMARANIZ NEDİR ?</RegistrationQueryText>
      <View style={styles.container}>
        <PhoneInput
          value={phoneNumber}
          onChangePhoneNumber={(number) => setPhoneNumber(number)}
          style={styles.phoneInput}
        />

        <CountryPicker
          //ref={countryPickerRef}
          onChange={(value) => selectCountry(value)}
          translation="eng"
        >
          <View></View>
        </CountryPicker>

        <View style={styles.buttonContainer}>
          <TextButton onPress={nextPageHandler} style={styles.textButton}>
            İleri
          </TextButton>
        </View>
      </View>
    </View>
  );
}

export default RegistrationPhoneNumberScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: screenHeight * 0.04,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  phoneInput: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  countryButton: {
    marginBottom: 20,
  },
  countryPickerButton: {
    borderRadius: 5,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  countryPickerCloseButton: {
    width: 20,
    height: 20,
  },
  submitButton: {
    width: "100%",
  },
  buttonContainer: {
    marginTop: 55,
    marginLeft: "auto",
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    paddingRight: 28,
  },
});
