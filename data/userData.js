import User from "../models/user";
import { MusicList, MovieList, SeriesList } from "./data";
import { musicTypes, movieTypes, seriesTypes, hobbyList } from "./categoryData";

export let newUser = new User(
  "1",
  "user@gmail.com",
  "userBlinder",
  "User",
  "Surname",
  "1234",
  "female",
  "23-02-2000",
  "Eskişehir, Turkey",
  "https://i.pinimg.com/474x/15/25/f9/1525f94766ba26d502220effe8981689.jpg",
  [],
  [],
  [],
  [],
  [],
  [],
  [],
);

for (let i = 0; i < 3; i++) {
  newUser.addMusic({
    title: MusicList[i].title,
    artist: MusicList[i].artist,
    imageUrl: MusicList[i].imageUrl,
  });

  const moviesToAdd1 = MovieList[0];
  const moviesToAdd2 = MovieList[1];
  const moviesToAdd3 = MovieList[2];

  newUser.addMovie(moviesToAdd1);
  newUser.addMovie(moviesToAdd2);
  newUser.addMovie(moviesToAdd3);

  const seriesToAdd1 = SeriesList[0];
  const seriesToAdd2 = SeriesList[1];
  const seriesToAdd3 = SeriesList[2];

  newUser.addSeries(seriesToAdd1);
  newUser.addSeries(seriesToAdd2);
  newUser.addSeries(seriesToAdd3);

  for (let i=0; i<4; i++){
    newUser.addMusicCategory(musicTypes[i]);
  }

  for (let i=0; i<4; i++){
    newUser.addMovieCategory(movieTypes[i]);
  }

  for (let i=0; i<4; i++){
    newUser.addSeriesCategory(seriesTypes[i]);
  }

  for (let i=0; i<4; i++){
    newUser.addHobby(hobbyList[i]);
  }
}
