import { View, StyleSheet, Button, Text } from "react-native";
import { useState } from "react";

import DateTimePickerModal from "react-native-modal-datetime-picker";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import TextButton from "../../../components/Button/TextButton";
import PrimaryButton from "../../../components/Button/PrimaryButton";

function RegistrationBirthDateScreen({ navigation }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  function nextPageHandler() {
    const formattedDate = `${("0" + selectedDate.getDate()).slice(-2)}-${(
      "0" +
      (selectedDate.getMonth() + 1)
    ).slice(-2)}-${selectedDate.getFullYear()}`;

    navigation.navigate("RegistrationPhoneNumberScreen");
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
});
