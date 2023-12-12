import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  RefreshControl,
} from "react-native";

import { newUser, profileUser } from "../../data/userData";
import Colors from "../../constansts/Colors";
import ProfileHeader from "../../components/ui/ProfileHeader";
import SubTitle from "../../components/ui/SubTitle";
import ProfileMusicCard from "../../components/Card/ProfileMusicCard";
import TypesCard from "../../components/Card/TypesCard";
import ProfileMovieCard from "../../components/Card/ProfileMovieCard";
import ProfileSeriesCard from "../../components/Card/ProfileSeriesCard";
import React, { useState, useEffect } from "react";
import { useUser } from "../../contexts/UserContext";
import getMyProfile from "../../api/user/getMyProfile";
import getMyCharacteristics from "../../api/characteristics/getMyCharacteristics";
import getMusicById from "../../api/music/getMusicById";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function ProfileScreen({ navigation }) {
  const { user } = useUser();
  const [profileUser, setProfileUser] = useState({
    name: "",
    surname: "",
    birthDate: "",
    location: "",
    imageUrl:
      "data:image/jpeg;base64,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",
    favoriteMusic: [],
    favoriteMovies: [],
    favoriteSeries: [],
    musicTypes: [],
    movieTypes: [],
    seriesTypes: [],
    hobbies: [],
  });

  const [refreshing, setRefreshing] = React.useState(false);
  const [musicList, setMusicList] = useState([]);
  const [movieList, setMovielist] = useState(profileUser.favoriteMovies);
  const [seriesList, setSeriesList] = useState(profileUser.favoriteSeries);
  const [musicType, setMusicType] = useState(profileUser.musicTypes);
  const [movieTypes, setMovieTypes] = useState(profileUser.movieTypes);
  const [seriesTypes, setSeriesTypes] = useState(profileUser.seriesTypes);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  let a = {
    banned: false,
    email: "asdasaaaaa@gmail.com",
    gender: { id: "43cc164a-8a91-450f-b66f-b7acc46ebceb", name: "male" },
    id: "3f50129d-148c-4d6c-8700-75715b5c8438",
    images: ["string"],
    location: { city: "string", country: "string", region: "string" },
    matched: false,
    name: "string",
    phoneNumber: "strinaaaaaasdasdgasdaasd",
    role: { id: "77ec5ce5-4296-4061-b3ec-09018fa79e2c", name: "normal" },
    surname: "string",
    username: "nine tailed fox",
  };

  useEffect(() => {
    getMyProfile(user.userId).then((response) => {
      console.log(response);
      setProfileUser({
        id: response.id,
        email: response.email,
        name: response.name,
        surname: response.surname,
        age: response.age,
        location: `${response.location.stateId}, ${response.location.countryId}`, //TODO: location
        imageUrl: newUser.imageUrl,
        favoriteMusic: newUser.favoriteMusic,
        favoriteMovies: newUser.favoriteMovies,
        favoriteSeries: newUser.favoriteSeries,
        musicTypes: newUser.musicTypes,
        movieTypes: newUser.movieTypes,
        seriesTypes: newUser.seriesTypes,
        hobbies: newUser.hobbies,
      });
    });

    getMyCharacteristics().then((response) => {
      //console.log(response);
      const fetchMusics = async () => {
        const promises = response.musics.map(async (music) => {
          return getMusicById(music.spotifyId).then((response) => {
            return {
              id: response.spotifyId,
              title: response.name,
              artist: response.artists[0],
              imageUrl: response.image,
            };
          });
        });
      
        const musicList = await Promise.all(promises);
        setMusicList(musicList);
      };
      
      fetchMusics();


      /*setProfileUser({
        ...profileUser,
        favoriteMusic: response.favoriteMusic,
        favoriteMovies: response.favoriteMovies,
        favoriteSeries: response.favoriteSeries,
        musicTypes: response.musicTypes,
        movieTypes: response.movieTypes,
        seriesTypes: response.seriesTypes,
        hobbies: response.hobbies,
      });*/
    });
  }, [user]);

  useEffect(() => {
    //setMusicList(profileUser.favoriteMusic);
    setMovielist(profileUser.favoriteMovies);
    setSeriesList(profileUser.favoriteSeries);
    setMusicType(profileUser.musicTypes);
    setMovieTypes(profileUser.movieTypes);
    setSeriesTypes(profileUser.seriesTypes);
  }, [
    profileUser.favoriteMusic,
    profileUser.favoriteMovies,
    profileUser.favoriteSeries,
    profileUser.musicTypes,
    profileUser.movieTypes,
    profileUser.seriesTypes,
  ]);

  function settingsHandler() {
    //navigation.navigate("");
  }
  function logOutHandler() {
    //navigation.navigate("");
  }

  function handlePress() {
    navigation.navigate("UpdateHobbyScreen", {
      chosenHobbies: profileUser.hobbies,
    });
  }

  function handlePressSeriesCategory() {
    navigation.navigate("UpdateSeriesCategoryScreen", {
      chosenSeriesTypes: profileUser.seriesTypes,
    });
  }

  function handlePressMovieCategory() {
    navigation.navigate("UpdateMovieCategoryScreen", {
      chosenMovieTypes: profileUser.movieTypes,
    });
  }

  function handlePressMusicCategory() {
    navigation.navigate("UpdateMusicCategoryScreen", {
      chosenMusicTypes: profileUser.musicTypes,
    });
  }

  function handlePressMusicList() {
    navigation.navigate("UpdateMusicOptionsScreen", {
      chosenMusicList: profileUser.favoriteMusic,
    });
  }

  function handlePressMovieList() {
    navigation.navigate("UpdateMovieOptionsScreen", {
      chosenMovieList: profileUser.favoriteMovies,
    });
  }

  function handlePressSeriesList() {
    navigation.navigate("UpdateSeriesOptionsScreen", {
      chosenSeriesList: profileUser.favoriteSeries,
    });
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.profileUpContainer}>
        <View style={styles.headerContainer}>
          <ProfileHeader
            settings={settingsHandler}
            logOut={logOutHandler}
            navigation={navigation}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: profileUser.imageUrl }} style={styles.image} />
        </View>
      </View>

      <View style={styles.profileDownContainer}>
        <SubTitle style={styles.name}>
          {profileUser.name} {profileUser.surname}
        </SubTitle>
        <SubTitle>
          {profileUser.location} - {profileUser.age}
        </SubTitle>

        <View style={styles.cardItem}>
          <TypesCard
            typeList={musicType}
            title={"Müzik Türleri"}
            handlePressable={handlePressMusicCategory}
          />
        </View>
        <View style={styles.cardItem}>
          <ProfileMusicCard
            musicList={musicList}
            handlePressable={handlePressMusicList}
          />
        </View>
        <View style={styles.cardItem}>
          <TypesCard
            typeList={movieTypes}
            title={"Film Türleri"}
            handlePressable={handlePressMovieCategory}
          />
        </View>
        <View style={styles.cardItem}>
          <ProfileMovieCard
            movieList={movieList}
            handlePressable={handlePressMovieList}
          />
        </View>
        <View style={styles.cardItem}>
          <TypesCard
            typeList={seriesTypes}
            title={"Dizi Türleri"}
            handlePressable={handlePressSeriesCategory}
          />
        </View>
        <View style={styles.cardItem}>
          <ProfileSeriesCard
            seriesList={seriesList}
            handlePressable={handlePressSeriesList}
          />
        </View>
        <View style={styles.cardItem}>
          <TypesCard
            typeList={profileUser.hobbies}
            title={"Hobiler"}
            handlePressable={handlePress}
          />
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
