class User {
  constructor(
    id,
    email,
    username,
    name,
    surname,
    password,
    gender,
    birthDate,
    location,
    imageUrl,
    musicTypes,
    favoriteMusic,
    movieTypes,
    favoriteMovies,
    seriesTypes,
    favoriteSeries,
    hobbies,

  ) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.name = name;
    this.surname = surname;
    this.password = password;
    this.gender = gender;
    this.birthDate = birthDate;
    this.location = location;
    this.imageUrl = imageUrl;
    this.musicTypes = musicTypes;
    this.favoriteMusic = favoriteMusic;
    this.movieTypes = movieTypes;
    this.favoriteMovies = favoriteMovies;
    this.seriesTypes = seriesTypes;
    this.favoriteSeries = favoriteSeries;
    this.hobbies = hobbies;
  }
}

export default User;
