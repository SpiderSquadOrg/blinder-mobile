import React from "react";
import Card from "../../components/ui/Card";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constansts/Colors";
import UserCardInformation from "../../components/User/UserCardInformation";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function UserCard({
  card,
  index,
  topCardIndex,
  isLikeIconActive,
  isDislikeIconActive,
}) {
  if (!card) {
    return null; // or return a loading spinner, or some fallback UI
  }
  return (
    <Card style={styles.cardContainer}>
      <View>
        <View>
          <UserCardInformation
            key={card.id}
            user={card.to}
            match={card.similarityScore}
          />
        </View>
      </View>
      <View style={styles.iconContainer}>
        {
          <View style={styles.iconContainer}>
            {isLikeIconActive && (
              <AntDesign
                style={styles.likeIcon}
                name="heart"
                size={52}
                color={Colors.primary800}
              />
            )}
            {isDislikeIconActive && (
              <AntDesign
                style={styles.dislikeIcon}
                name="close"
                size={52}
                color={"black"}
              />
            )}
          </View>
        }
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.6,
    marginBottom: screenHeight * 0.023,
  },
  iconContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
  },
  likeIcon: {
    position: "absolute",
    right: 15,
  },
  dislikeIcon: {
    position: "absolute",
    left: 15,
  },
});

export default UserCard;
