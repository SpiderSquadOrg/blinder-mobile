import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ToggleButton } from "react-native-paper";
import getGenders from "../../api/gender/getGenders";

function GenderPicker({onGenderSelect}) {
  const [selectedGender, setSelectedGender] = useState(null);
  const [genders, setGenders] = useState([]);

  useEffect(() => {
    getGenders()
      .then((res) => {
        setGenders(res.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  , []);

  useEffect(() => {
    onGenderSelect(selectedGender);
  }, [selectedGender]);

  const onButtonToggle = (value) => {
    setSelectedGender(value === selectedGender ? null : value);
  };

  const getStatus = (value) => {
    return selectedGender?.name === value ? "checked" : "unchecked";
  };

  const getIconName = (value) => {
    if(value==="other"){
      return "gender-male-female-variant"
    }
    return `gender-${value}`;
  }

  const getButtonText = (value) => {
    if(value==="male"){
      return "Erkek"
    }
    else if(value==="female"){
      return "Kadın"
    }
    return "Diğer"
  }
    

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        {genders.map((gender,index) => (
          <View key={index} style={styles.buttonContainer}>
            <ToggleButton
              icon={getIconName(gender.name)}
              value={gender.name}
              status={getStatus(gender.name)}
              onPress={() => onButtonToggle(gender)}
              size={50}
              style={styles.button}
              rippleColor={"transparent"}
            />
            <Text style={{ marginTop: 5 }}>{getButtonText(gender.name)}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default GenderPicker;

const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginVertical: 15,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  button: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "#BDBDBD",
  },
});
