import React from "react";
import Card from "../../components/ui/Card";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constansts/Colors";
import MiniUserCardInformation from "../../components/User/MiniUserCardInformation";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
import addLikePossibleMatch from "../../api/possibleMatches/addLikePossibleMatch";

function MiniUserCard({ user, index, withHeart, withTakeBack }) {

  async function handleHeartPress(matchId) {
    console.log("Heart is pressed");
    await addLikePossibleMatch(matchId);
  }

  async function handleTakeBackPress(matchId) {
    console.log("Take back is pressed");
    console.log(matchId);
  }

  return (
    <Card style={styles.cardContainer}>
      <MiniUserCardInformation user={user} />
      <View style={styles.iconContainer}></View>
      {withHeart && (
        <TouchableOpacity style={styles.likeIcon} activeOpacity={0.5} onPress={() => handleHeartPress(user.id)}>
          <AntDesign name="heart" size={28} color={"white"} />
        </TouchableOpacity>
      )}
      {withTakeBack && (
        <TouchableOpacity style={styles.takeBackIcon} activeOpacity={0.5} onPress={() => handleTakeBackPress(user.id)}>
          <AntDesign name="back" size={28} color={"white"} />
        </TouchableOpacity>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: screenWidth * 0.4,
    height: screenHeight * 0.3,
  },
  iconContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
  },
  likeIcon: {
    position: "absolute",
    right: 15,
    bottom: 15,
    borderRadius: 25,
    backgroundColor: Colors.primary800,
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  takeBackIcon: {
    position: "absolute",
    right: 15,
    bottom: 15,
    borderRadius: 25,
    backgroundColor: "green",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MiniUserCard;
