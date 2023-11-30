import { View, StyleSheet, Button } from "react-native";
import { useState } from "react";

import DateTimePickerModal from "@react-native-community/datetimepicker";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import TextButton from "../../../components/Button/TextButton";

function RegistrationBirthDateScreen({ navigation }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  function nextPageHandler() {
    const formattedDate = `${("0" + selectedDate.getDate()).slice(-2)}-${(
      "0" +
      (selectedDate.getMonth() + 1)
    ).slice(-2)}-${selectedDate.getFullYear()}`;

    navigation.navigate("RegistrationPartnerGenderScreen");
  }

  const toggle = () => showModal(!show);

  return (
    <View>
      <RegistrationQueryText>DOĞUM TARİHİNİZ NEDİR ?</RegistrationQueryText>
      <View style={styles.dateContainer}>
        <DateTimePickerModal
          value={selectedDate}
          onChange={(event, date) => {
            if (date instanceof Date) {
              const correctedDate = new Date(
                date.getTime() + date.getTimezoneOffset() * 60 * 1000
              );

              setSelectedDate(correctedDate);
            }
          }}
          show={isDatePickerVisible}
          toggle={toggle}
          style={styles}
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
