import { View, StyleSheet } from "react-native";
import LikesCards from "../../containers/LikesCards";
import UserProfileCard from "../../containers/MatchCard";
import Card from "../../components/ui/Card";
import MiniUserCard from "../../containers/UserCards/MiniUserCard";
import { newUser } from "../../data/userData";
import UserCard from "../../containers/UserCards/UserCard";

function CardScreen() {
  return (
    <View>
      <MiniUserCard user={newUser} withHeart={true} />
    </View>
  );
}

export default CardScreen;

const styles = StyleSheet.create({});

//<UserCard card={newUser} index={1}  isLikeIconActive={true} />
//<MiniUserCard user={newUser} withHeart={true} />
