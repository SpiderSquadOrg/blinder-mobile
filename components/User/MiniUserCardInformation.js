import { View, StyleSheet, Dimensions, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
import SubTitle from "../ui/SubTitle";
import Colors from "../../constansts/Colors";

function MiniUserCardInformation({ user }) {
  function checkGender(gender) {
    if (gender === "female") {
      return <FontAwesome name="female" size={20} color="gray" />;
    } else if (gender === "male") {
      return <FontAwesome name="male" size={20} color="gray" />;
    } else {
      return <FontAwesome name="transgender" size={20} color="gray" />;
    }
  }

  return (
    <View>
      <View style={styles.userInformation}>
        <SubTitle style={styles.mainTitle}>{user.username}</SubTitle>

        <View style={styles.genderIcon}>{checkGender(user.gender.name)}</View>
        <SubTitle style={styles.informationTitle}>{user.age}</SubTitle>
        <SubTitle style={styles.informationTitle}>
          {user.location.stateName} , {user.location.countryName}
        </SubTitle>
      </View>
      <View style={styles.matchingPart}>
        <SubTitle style={styles.title}>Profil eşleşme oranı</SubTitle>
        <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
            <Text style={{ color: "white", fontSize: screenWidth * 0.035 }}>
              %{(user.similarityScore * 100).toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default MiniUserCardInformation;

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: screenWidth * 0.045,
  },
  title: {
    fontWeight: "normal",
    fontSize: screenWidth * 0.03,
  },
  informationTitle: {
    fontSize: screenWidth * 0.03,
  },
  outerContainer: {
    borderRadius: 23,
    overflow: "hidden",
    borderColor: "#DADCE0",
    borderWidth: 1,
    width: "50%",
  },
  innerContainer: {
    backgroundColor: Colors.primary500,
    alignItems: "center",
    justifyContent: "center",
  },
  userInformation: {
    marginBottom: screenHeight * 0.01,
  },
  genderIcon: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: screenHeight * 0.015,
  },
  matchingPart: {
    marginBottom: screenHeight * 0.03,
    alignItems: "center",
  },
});
