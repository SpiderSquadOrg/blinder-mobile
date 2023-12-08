import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  RefreshControl,
} from "react-native";

import { newUser } from "../../data/userData";
import Colors from "../../constansts/Colors";
import ProfileHeader from "../../components/ui/ProfileHeader";
import SubTitle from "../../components/ui/SubTitle";
import ProfileMusicCard from "../../components/Card/ProfileMusicCard";
import TypesCard from "../../components/Card/TypesCard";
import ProfileMovieCard from "../../components/Card/ProfileMovieCard";
import ProfileSeriesCard from "../../components/Card/ProfileSeriesCard";
import React, { useState, useEffect } from "react";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

function ProfileScreen({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [musicList, setMusicList] = useState(newUser.favoriteMusic);
  const [movieList, setMovielist] = useState(newUser.favoriteMovies);
  const [seriesList, setSeriesList] = useState(newUser.favoriteSeries);
  const [musicType, setMusicType] = useState(newUser.musicTypes);
  const [movieTypes, setMovieTypes] = useState(newUser.movieTypes);
  const [seriesTypes, setSeriesTypes] = useState(newUser.seriesTypes);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setMusicList(newUser.favoriteMusic);
    setMovielist(newUser.favoriteMovies);
    setSeriesList(newUser.favoriteSeries);
    setMusicType(newUser.musicTypes);
    setMovieTypes(newUser.movieTypes);
    setSeriesTypes(newUser.seriesTypes);
  }, [
    newUser.favoriteMusic,
    newUser.favoriteMovies,
    newUser.favoriteSeries,
    newUser.musicTypes,
    newUser.movieTypes,
    newUser.seriesTypes,
  ]);

  function settingsHandler() {
    //navigation.navigate("");
  }
  function logOutHandler() {
    //navigation.navigate("");
  }

  function handlePress() {
    navigation.navigate("UpdateHobbyScreen", {
      chosenHobbies: newUser.hobbies,
    });
  }

  function handlePressSeriesCategory() {
    navigation.navigate("UpdateSeriesCategoryScreen", {
      chosenSeriesTypes: newUser.seriesTypes,
    });
  }

  function handlePressMovieCategory() {
    navigation.navigate("UpdateMovieCategoryScreen", {
      chosenMovieTypes: newUser.movieTypes,
    });
  }

  function handlePressMusicCategory() {
    navigation.navigate("UpdateMusicCategoryScreen", {
      chosenMusicTypes: newUser.musicTypes,
    });
  }

  function handlePressMusicList() {
    navigation.navigate("UpdateMusicOptionsScreen", {
      chosenMusicList: newUser.favoriteMusic,
    });
  }

  function handlePressMovieList() {
    navigation.navigate("UpdateMovieOptionsScreen", {
      chosenMovieList: newUser.favoriteMovies,
    });
  }

  function handlePressSeriesList() {
    navigation.navigate("UpdateSeriesOptionsScreen", {
      chosenSeriesList: newUser.favoriteSeries,
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
          <ProfileHeader settings={settingsHandler} logOut={logOutHandler} />
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: newUser.imageUrl }} style={styles.image} />
        </View>
      </View>

      <View style={styles.profileDownContainer}>
        <SubTitle style={styles.name}>
          {newUser.name} {newUser.surname}
        </SubTitle>
        <SubTitle>
          {newUser.location} - {calculateAge(newUser.birthDate)}
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
            typeList={newUser.hobbies}
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
