import { View, StyleSheet, Dimensions, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
import SubTitle from "../ui/SubTitle";
import Colors from "../../constansts/Colors";

function UserCardInformation({ user, match }) {
  function checkGender(gender) {
    if (gender === "female") {
      return <FontAwesome name="female" size={30} color="gray" />;
    } else if (gender === "male") {
      return <FontAwesome name="male" size={30} color="gray" />;
    } else {
      return <FontAwesome name="transgender" size={30} color="gray" />;
    }
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.userInformation}>
        <SubTitle style={styles.mainTitle}>{user.nickname}</SubTitle>

        <View style={styles.genderIcon}>{checkGender(user.gender.name)}</View>
        <SubTitle style={styles.informationTitle}>{user.age}</SubTitle>
        <SubTitle style={styles.informationTitle}>{user.location.stateName} , {user.location.countryName}</SubTitle>
      </View>
      <View style={styles.matchingPart}>
        <SubTitle style={styles.title}>Profil eşleşme oranı</SubTitle>
        <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
            <Text style={{ color: "white" }}>%{(match * 100).toFixed(2)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default UserCardInformation;

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: screenWidth * 0.1,
  },
  title: {
    fontWeight: "normal",
    fontSize: screenWidth * 0.044,
  },
  informationTitle: {
    fontSize: screenWidth * 0.05,
  },
  outerContainer: {
    borderRadius: 23,
    overflow: "hidden",
    borderColor: "#DADCE0",
    borderWidth: 1,
    marginTop: screenHeight * 0.01,
    width: "85%",
  },
  innerContainer: {
    backgroundColor: Colors.primary500,
    alignItems: "center",
    justifyContent: "center",
    padding: 9,
  },
  userInformation: {
    marginBottom: screenHeight * 0.03,
  },
  genderIcon: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: screenHeight * 0.015,
  },
  matchingPart: {
    marginBottom: screenHeight * 0.05,
    alignItems: "center",
  },
  mainContainer: {
    marginVertical: screenWidth* 0.32,
  }
});
