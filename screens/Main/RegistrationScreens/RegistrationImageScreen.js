import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  Pressable,
} from "react-native";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";
import RegistrationQueryText from "../../../components/ui/RegistrationQueryText";
import TextButton from "../../../components/Button/TextButton";
import Colors from "../../../constansts/Colors";
import BlackImg from "../../../assets/blackWallpaper.jpg";
import { useUser } from "../../../contexts/UserContext";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function RegistrationImageScreen({ navigation,route }) {
  const [image, setImage] = useState(null);

  /*const { user } = useUser();

  useEffect(() => {
    if(user){
      navigation.navigate("Home");
    }
  }, []);*/

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };



  function nextPageHandler() {
    navigation.navigate("RegistrationGenderScreen",{
      user: {
        ...route.params.user,
        image: image,
      },
    });
  }
  return (
    <View>
      <RegistrationQueryText>PROFİL FOTOĞRAFIN</RegistrationQueryText>
      <View style={styles.imageContainer}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: 17,
              marginTop: screenHeight * 0.03,
              marginBottom: screenHeight * 0.03,
            }}
          >
            Film rulosundan bir resim seçin
          </Text>
          <Pressable
            style={({ pressed }) => (pressed ? styles.pressed : null)}
            onPress={pickImage}
          >
            <FontAwesome name="photo" size={24} color="white" />
          </Pressable>

          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: 170,
                height: 170,
                borderRadius: 170,
                marginTop: screenHeight * 0.04,
              }}
            />
          )}
          {!image && (
            <Image
              source={BlackImg}
              style={{
                width: 170,
                height: 170,
                borderRadius: 170,
                borderWidth: 1,
                marginTop: screenHeight * 0.04,
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
    marginTop: screenHeight * 0.1,
    marginLeft: "auto",
  },
  imageContainer: {
    marginTop: screenHeight * 0.05,
    height: screenHeight * 0.4,
    backgroundColor: Colors.primary600,
  },
});
