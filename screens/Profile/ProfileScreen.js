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
import getProfile from "../../api/user/getProfile";
import getMyCharacteristics from "../../api/characteristics/getMyCharacteristics";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function ProfileScreen({ navigation }) {
  const { user } = useUser();
  const [profileUser, setProfileUser] = useState({
    name: "",
    surname: "",
    birthDate: "",
    location: "",
    imageUrl: "",
    favoriteMusics: [],
    favoriteMovies: [],
    favoriteSeries: [],
    musicTypes: [],
    movieTypes: [],
    seriesTypes: [],
    hobbies: [],
  });

  const [refreshing, setRefreshing] = React.useState(false);
  const [hobbies, setHobbies] = useState([]); 
  const [musicList, setMusicList] = useState([]);
  const [movieList, setMovielist] = useState(profileUser.favoriteMovies);
  const [seriesList, setSeriesList] = useState(profileUser.favoriteSeries);
  const [musicTypes, setMusicTypes] = useState(profileUser.musicTypes);
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
    getProfile(user.userId).then((response) => {
      setProfileUser({
        id: response.id,
        email: response.email,
        name: response.name,
        surname: response.surname,
        age: response.age,
        location: `${response.location.stateName}, ${response.location.countryName}`, 
        imageUrl: response.images[0],
      });
    });

    getMyCharacteristics().then((response) => {
      setMusicList(response.musics.map((music) => {
        return {
          id: music.spotifyId,
          title: music.name,
          artist: music.artists[0],
          imageUrl: music.image,
        };
      }));

      setMovielist(response.movies.map((movie) => {
        return {
          id: movie.imdbId,
          name: movie.name,
          imageUrl: movie.image,
          year: movie.year,
        };
      }));

      setSeriesList(response.tvSeriesList.map((series) => {
        return {
          id: series.imdbId,
          name: series.name,
          imageUrl: series.image,
          year: series.year,
        };
      }));

      setMusicTypes(response.musicCategories);
      setMovieTypes(response.movieCategories);
      setSeriesTypes(response.tvSeriesCategories);
      setHobbies(response.hobbies);


    });
  }, [user]);

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
      chosenMusicList: profileUser.favoriteMusics,
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
            typeList={musicTypes}
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
            typeList={hobbies}
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
