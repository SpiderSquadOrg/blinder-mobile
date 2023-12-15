import { View, StyleSheet, Dimensions, Button, Image } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import TextButton from "../../../components/Button/TextButton";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationImageScreen({ navigation }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  function nextPageHandler() {
    navigation.navigate("RegistrationGenderScreen");
  }
  return (
    <View>
      <RegistrationQueryText>PROFİL FOTOĞRAFIN</RegistrationQueryText>
      <View style={styles.imageContainer}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: screenWidth * 0.5,
                height: screenWidth * 0.5,
                marginTop: screenHeight * 0.02,
              }}
            />
          )}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TextButton onPress={nextPageHandler} style={styles.textButton}>
          İleri
        </TextButton>
      </View>
    </View>
  );
}

export default RegistrationImageScreen;

const styles = StyleSheet.create({
  textButton: {
    fontWeight: "bold",
    fontSize: 18,
    paddingRight: 28,
  },
  buttonContainer: {
    marginTop: 45,
    marginLeft: "auto",
  },
  imageContainer: {
    marginTop: screenHeight * 0.05,
  },
});