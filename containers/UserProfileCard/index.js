import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { StyleSheet, Text } from "react-native";
import Swiper from "react-native-deck-swiper";
import UserCard from "../UserCards/UserCard";
import getPossibleMatches from "../../api/possibleMatches/getPossibleMatches";
import addLikePossibleMatch from "../../api/possibleMatches/addLikePossibleMatch";
import addDislikePossibleMatch from "../../api/possibleMatches/addDislikePossibleMatch";

const UserProfileCard = forwardRef((props, ref) => {
  const [cardIndex, setCardIndex] = useState(0);
  const [renderIndex, setRenderIndex] = useState(0);
  const [isLikeIconActive, setIsLikeIconActive] = useState(false);
  const [isDislikeIconActive, setIsDislikeIconActive] = useState(false);
  const [cardPosition, setCardPosition] = useState(0);
  const [topCardIndex, setTopCardIndex] = useState(0);
  const [cards, setCards] = useState([]);
  const swiperRef = useRef(null);

  const fetchUserProfile = () => {
    getPossibleMatches()
      .then((res) => {
        setCards(res.filter((card) => card.status === "UNMATCHED"));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (topCardIndex === cards.length) {
      setTopCardIndex(0);
      setCardIndex(0);
      fetchUserProfile();
      setRenderIndex((prevKey) => prevKey + 1);
    }
  }, [topCardIndex]);

  useImperativeHandle(ref, () => ({
    fetchUserProfile,
  }));

  useEffect(() => {
    fetchUserProfile();
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

  return cards.length > 0 ? (
    <Swiper
      key={`swiper-${renderIndex}`}
      ref={swiperRef}
      cardIndex={cardIndex}
      style={styles.swiper}
      cards={cards}
      renderCard={(card, index) => {
        return (
          <UserCard
            card={cards[index - 1]}
            index={index}
            topCardIndex={topCardIndex}
            isDislikeIconActive={isDislikeIconActive}
            isLikeIconActive={isLikeIconActive}
          />
        );
      }}
      backgroundColor={"transparent"}
      onSwiped={handleSwipe}
      onSwipedAborted={handleSwipeAborted}
      onSwipedLeft={() => handleSwipeLeft(cards[topCardIndex]?.id)}
      onSwipedRight={() => handleSwipeRight(cards[topCardIndex]?.id)}
      onSwipedAll={() => {}}
      stackSize={1}
      verticalSwipe={false}
      onSwiping={(position) => handleOnSwiping(position)}
    />
  ) : (
    <Text>Loading...</Text>
  );
});

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

export default UserProfileCard;
