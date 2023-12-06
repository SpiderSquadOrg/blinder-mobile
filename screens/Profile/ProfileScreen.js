import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Text,
} from "react-native";

import { user1 } from "../../data/data";
import Colors from "../../constansts/Colors";
import ProfileHeader from "../../components/ui/ProfileHeader";
import SubTitle from "../../components/ui/SubTitle";
import ProfileMusicCard from "../../components/Card/ProfileMusicCard";
import TypesCard from "../../components/Card/TypesCard";
import ProfileMovieCard from "../../components/Card/ProfileMovieCard";
import ProfileSeriesCard from "../../components/Card/ProfileSeriesCard";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function ProfileScreen({ navigation }) {
  function settingsHandler() {
    //navigation.navigate("");
  }
  function logOutHandler() {
    //navigation.navigate("");
  }

  return (
    <ScrollView>
      <View style={styles.profileUpContainer}>
        <View style={styles.headerContainer}>
          <ProfileHeader settings={settingsHandler} logOut={logOutHandler} />
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: user1.imageUrl }} style={styles.image} />
        </View>
      </View>

      <View style={styles.profileDownContainer}>
        <SubTitle style={styles.name}>
          {user1.name} {user1.surname}
        </SubTitle>
        <SubTitle>
          {user1.location} - {calculateAge(user1.birthDate)}
        </SubTitle>

        <View style={styles.cardItem}>
          <TypesCard typeList={user1.musicTypes} title={"Müzik Türleri"} />
        </View>
        <View style={styles.cardItem}>
          <ProfileMusicCard musicList={user1.favoriteMusic} />
        </View>
        <View style={styles.cardItem}>
          <TypesCard typeList={user1.movieTypes} title={"Film Türleri"} />
        </View>
        <View style={styles.cardItem}>
          <ProfileMovieCard movieList={user1.favoriteMovies} />
        </View>
        <View style={styles.cardItem}>
          <TypesCard typeList={user1.seriesTypes} title={"Dizi Türleri"} />
        </View>
        <View style={styles.cardItem}>
          <ProfileSeriesCard seriesList={user1.favoriteSeries} />
        </View>
        <View style={styles.cardItem}>
          <TypesCard typeList={user1.hobbies} title={"Hobiler"} />
        </View>
      </View>
    </ScrollView>
  );
}

function calculateAge(birthDate) {
  const birthYear = parseInt(birthDate.split("-")[2], 10);
  const currentYear = new Date().getFullYear();
  const calculatedAge = currentYear - birthYear;
  return calculatedAge;
}

export default ProfileScreen;

const styles = StyleSheet.create({
  profileUpContainer: {
    height: screenHeight * 0.25,
    backgroundColor: Colors.primary600,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: screenHeight * 0.04,
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 170,
    borderWidth: 1,
  },
  headerContainer: {
    marginTop: screenHeight * 0.03,
  },
  profileDownContainer: {
    marginTop: screenHeight * 0.05,
    marginBottom: screenHeight * 0.07,
  },
  name: {
    fontSize: screenHeight * 0.04,
  },
  subtitles: {
    alignItems: "flex-start",
    marginLeft: screenWidth * 0.05,
    color: "gray",
  },
  cardItem: {
    marginVertical: screenHeight * 0.02,
    marginHorizontal: screenWidth * 0.01,
  },
});
