import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Colors from "../../constansts/Colors";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function MusicTypes({ onMusicTypeSelect }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    onMusicTypeSelect(selectedOptions);
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
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedOptions.includes("Klasik Müzik") && styles.selectedButton,
          ]}
          onPress={() => toggleOption("Klasik Müzik")}
        >
          <Text style={styles.buttonText}>Klasik Müzik</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedOptions.includes("Hip-Hop Müzik") && styles.selectedButton,
          ]}
          onPress={() => toggleOption("Hip-Hop Müzik")}
        >
          <Text style={styles.buttonText}>Hip-Hop Müzik</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedOptions.includes("Pop Müzik") && styles.selectedButton,
          ]}
          onPress={() => toggleOption("Pop Müzik")}
        >
          <Text style={styles.buttonText}>Pop Müzik</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedOptions.includes("Country Müzik") && styles.selectedButton,
          ]}
          onPress={() => toggleOption("Country Müzik")}
        >
          <Text style={styles.buttonText}>Country Müzik</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedOptions.includes("Rock Müzik") && styles.selectedButton,
          ]}
          onPress={() => toggleOption("Rock Müzik")}
        >
          <Text style={styles.buttonText}>Rock Müzik</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedOptions.includes("Reggae") && styles.selectedButton,
          ]}
          onPress={() => toggleOption("Reggae")}
        >
          <Text style={styles.buttonText}>Reggae</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedOptions.includes("Elektronik Müzik") &&
              styles.selectedButton,
          ]}
          onPress={() => toggleOption("Elektronik Müzik")}
        >
          <Text style={styles.buttonText}>Elektronik Müzik</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedOptions.includes("Blues") && styles.selectedButton,
          ]}
          onPress={() => toggleOption("Blues")}
        >
          <Text style={styles.buttonText}>Blues</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedOptions.includes("Rap Müzik") && styles.selectedButton,
          ]}
          onPress={() => toggleOption("Rap Müzik")}
        >
          <Text style={styles.buttonText}>Rap Müzik</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedOptions.includes("Heavy Metal") && styles.selectedButton,
          ]}
          onPress={() => toggleOption("Heavy Metal")}
        >
          <Text style={styles.buttonText}>Heavy Metal</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedOptions.includes("Caz Müzik") && styles.selectedButton,
          ]}
          onPress={() => toggleOption("Caz Müzik")}
        >
          <Text style={styles.buttonText}>Caz Müzik</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedOptions.includes("Folk Müzik") && styles.selectedButton,
          ]}
          onPress={() => toggleOption("Folk Müzik")}
        >
          <Text style={styles.buttonText}>Folk Müzik</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MusicTypes;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    marginVertical: screenHeight * 0.02,
    justifyContent: "center",
  },
  rowContainer: {
    flexDirection: "row",
  },

  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: Colors.primary500,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    borderRadius: 12,
  },
  selectedButton: {
    opacity: 0.75,
  },
  buttonText: {
    color: "white",
  },
});
