import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import PhoneInput from "react-native-phone-input";

import TextButton from "../../../components/Button/TextButton";
import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import { useUser } from "../../../contexts/UserContext";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationPhoneNumberScreen({ navigation, route }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  /*const { user } = useUser();

  useEffect(() => {
    if(user){
      navigation.navigate("Home");
    }
  }, []);*/

  useEffect(() => {}, [selectedCountry]);

  const nextPageHandler = () => {
    if (phoneNumber === "") {
      alert("Please fill in all fields");
      return;
    }

    navigation.navigate("RegistrationLocationScreen",
    {
      user: {
        ...route.params.user,
        phoneNumber: phoneNumber,
      },
    }
    );
  };

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
        <View style={styles.buttonContainer}>
          <TextButton onPress={nextPageHandler} style={styles.textButton}>
            İleri
          </TextButton>
        </View>
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
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    padding:5,
  },
  buttonContainer: {
    marginTop: 45,
    marginRight: 23,
    marginLeft: "auto",
  },
});