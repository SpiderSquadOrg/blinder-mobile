import { View, StyleSheet, Button, Text } from "react-native";
import { useEffect, useState } from "react";

import DateTimePickerModal from "react-native-modal-datetime-picker";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import TextButton from "../../../components/Button/TextButton";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import { useUser } from "../../../contexts/UserContext";

function RegistrationBirthDateScreen({ navigation, route }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  /*const { user } = useUser();

  useEffect(() => {
    if(user){
      navigation.navigate("Home");
    }
  }, []);*/

  function nextPageHandler() {
    navigation.navigate("RegistrationPhoneNumberScreen", {
      user: {
        ...route.params.user,
        birthDate: selectedDate,
      },
    });
  }

  const toggle = () => showModal(!show);

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  return (
    <View>
      <RegistrationQueryText>DOĞUM TARİHİNİZ NEDİR ?</RegistrationQueryText>
      <View style={styles.dateContainer}>
        <Text style={styles.selectedDateText}>
          {selectedDate.toLocaleDateString()}
        </Text>
        <PrimaryButton onPress={() => setDatePickerVisibility(true)}>
          Tarih Seç
        </PrimaryButton>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          textColor="black"
          locale="tr_TR"
          cancelTextIOS="İptal"
          confirmTextIOS="Tamam"
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

export default RegistrationBirthDateScreen;

const styles = StyleSheet.create({
  dateContainer: {
    margin: 50,
    alignItems: "center",
  },
  selectedDateText: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 55,
    marginLeft: "auto",
    marginRight: 23,
  },
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    padding: 5,
  },
});
