import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import PhoneInput from "react-native-phone-input";
import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationPhoneNumberScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {}, [selectedCountry]);


  return (
    <ScrollView>
      <RegistrationQueryText>TELEFON NUMARANIZ NEDİR ?</RegistrationQueryText>
      <View style={styles.container}>
        <PhoneInput
          value={phoneNumber}
          initialCountry={"tr"}
          onChangePhoneNumber={(number) => setPhoneNumber(number)}
          style={styles.phoneInput}
          textProps={{
            placeholder: "Enter a phone number...",
          }}
        />
      </View>
    </ScrollView>
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
});
