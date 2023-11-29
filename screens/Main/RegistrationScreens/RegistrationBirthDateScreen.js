import { View, StyleSheet, Button, Text } from "react-native";
import { useState } from "react";

import DateTimePickerModal from "@react-native-community/datetimepicker";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import TextButton from "../../../components/Button/TextButton";

function RegistrationBirthDateScreen() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth() + 1;
  const day = selectedDate.getDate();

  function showDatePicker() {
    setDatePickerVisibility(true);
  }

  function nextPageHandler() {
    console.log(birthDate);
  }

  const toggle = () => showModal(!show);

  return (
    <View>
      <RegistrationQueryText>DOĞUM TARİHİNİZ NEDİR ?</RegistrationQueryText>
      <View style={styles.dateContainer}>
        <Button title="Show Date Picker" onPress={showDatePicker} />
        <DateTimePickerModal
          value={selectedDate}
          onChange={(event, date) => {
            if (date instanceof Date) {
              const correctedDate = new Date(
                date.getTime() + date.getTimezoneOffset() * 60 * 1000
              );
              const formattedDate = correctedDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              });
              setSelectedDate(correctedDate);
            }
          }}
          show={isDatePickerVisible}
          toggle={toggle}
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
    fontSize: 15,
    marginTop: 30,
    alignItems: "center",
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
