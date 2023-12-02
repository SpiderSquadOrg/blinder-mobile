import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Swiper from "react-native-deck-swiper";
import UserCard from "../UserCards/UserCard";

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
        <UserCard
          card={card}
          index={index}
          topCardIndex={topCardIndex}
          isDislikeIconActive={isDislikeIconActive}
          isLikeIconActive={isLikeIconActive}
        />
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
  swiper: {
    position: "absolute",
    backgroundColor: "transparent",
    zIndex: 2,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MatchCard;
