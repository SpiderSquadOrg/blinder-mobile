import React, { useEffect, useState } from "react";
import Card from "../../components/ui/Card";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constansts/Colors";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function MatchCard({ style }) {
  const [cardIndex, setCardIndex] = useState(0);
  const [isLikeIconActive, setIsLikeIconActive] = useState(false);
  const [isDislikeIconActive, setIsDislikeIconActive] = useState(false);
  const [cardPosition, setCardPosition] = useState(0);
  const [topCardIndex, setTopCardIndex] = useState(0);

  const handleSwipe = () => {
    setTopCardIndex(topCardIndex + 1);
    setIsLikeIconActive(false);
    setIsDislikeIconActive(false);
  };

  const handleSwipeAborted = () => {
    setCardPosition(0);
  };
  const handleSwipeLeft = () => {};

  const handleSwipeRight = () => {};

  const handleOnSwiping = (position) => {
    setCardPosition(position);
  };

  const forceRerender = () => setCardIndex((prevKey) => prevKey + 1);

  useEffect(() => {
    if (cardPosition === 0) {
      setIsLikeIconActive(false);
      setIsDislikeIconActive(false);
    } else if (cardPosition > 7) {
      setIsLikeIconActive(true);
      setIsDislikeIconActive(false);
    } else if (cardPosition < -7) {
      setIsLikeIconActive(false);
      setIsDislikeIconActive(true);
    }
    forceRerender();
  }, [cardPosition]);

  return (
    <Swiper
      ref={(swiper) => {
        this.swiper = swiper;
      }}
      cardIndex={cardIndex}
      style={styles.swiper}
      cards={[
        { name: "Batuhan" },
        { name: "Oscar" },
        { name: "John" },
        { name: "Doe" },
        { name: "Jane" },
        { name: "Smith" },
      ]} // replace with your actual data
      renderCard={(card, index) => (
        <Card style={styles.cardContainer}>
          <Text>{card.name}</Text>
          <View style={styles.iconContainer}>
            {index === topCardIndex && (
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
            )}
          </View>
        </Card>
      )}
      backgroundColor={"transparent"}
      onSwiped={handleSwipe}
      onSwipedAborted={handleSwipeAborted}
      onSwipedLeft={handleSwipeLeft}
      onSwipedRight={handleSwipeRight}
      onSwipedAll={() => {}}
      stackSize={2}
      verticalSwipe={false}
      onSwiping={(position) => handleOnSwiping(position)}
    />
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.6,
    marginBottom: screenHeight * 0.023,
  },
  swiper: {
    position: "absolute",
    backgroundColor: "transparent",
    zIndex: 2,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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

export default MatchCard;
