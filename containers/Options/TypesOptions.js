import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { useState, useEffect } from "react";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
import Colors from "../../constansts/Colors";

function TypesOptions({ onTypeSelect, options }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    onTypeSelect(selectedOptions);
  }, [selectedOptions]);

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <View style={styles.rootContainer}>
      {chunkArray(options, 2).map((row, rowIndex) => (
        <View key={rowIndex} style={styles.rowContainer}>
          {row.map((option,index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                selectedOptions.includes(option) && styles.selectedButton,
              ]}
              onPress={() => toggleOption(option)}
            >
              <Text style={styles.buttonText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

function chunkArray(array, chunkSize) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

export default TypesOptions;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    marginVertical: screenHeight * 0.02,
    justifyContent: "center",
  },
  button: {
    backgroundColor: Colors.primary500,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    borderRadius: 12,
  },
  buttonText: {
    color: "white",
  },
  selectedButton: {
    opacity: 0.75,
  },
  rowContainer: {
    flexDirection: "row",
  },
});
