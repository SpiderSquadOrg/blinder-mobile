import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Swiper from "react-native-deck-swiper";
import UserCard from "../UserCards/UserCard";
import getPossibleMatches from "../../api/possibleMatches/getPossibleMatches";
import addLikePossibleMatch from "../../api/possibleMatches/addLikePossibleMatch";
import addDislikePossibleMatch from "../../api/possibleMatches/addDislikePossibleMatch";

function MatchCard({ style }) {
  const [cardIndex, setCardIndex] = useState(0);
  const [isLikeIconActive, setIsLikeIconActive] = useState(false);
  const [isDislikeIconActive, setIsDislikeIconActive] = useState(false);
  const [cardPosition, setCardPosition] = useState(0);
  const [topCardIndex, setTopCardIndex] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getPossibleMatches()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSwipe = () => {
    setTopCardIndex(topCardIndex + 1);
    setIsLikeIconActive(false);
    setIsDislikeIconActive(false);
  };

  const handleSwipeAborted = () => {
    setCardPosition(0);
  };
  const handleSwipeLeft = async (possibleMatchId) => {
    await addDislikePossibleMatch(possibleMatchId);
  };

  const handleSwipeRight = async (possibleMatchId) => {
    console.log(possibleMatchId);
    await addLikePossibleMatch(possibleMatchId);
  };

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
      cards={cards}
      renderCard={(card, index) => (
        <UserCard
          card={cards}
          index={index}
          topCardIndex={topCardIndex}
          isDislikeIconActive={isDislikeIconActive}
          isLikeIconActive={isLikeIconActive}
        />
      )}
      backgroundColor={"transparent"}
      onSwiped={handleSwipe}
      onSwipedAborted={handleSwipeAborted}
      onSwipedLeft={() => handleSwipeLeft(cards[topCardIndex].id)}
      onSwipedRight={() => handleSwipeRight(cards[topCardIndex].id)}
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
