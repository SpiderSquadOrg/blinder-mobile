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
    hobbies
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

  addMusic(music) {
    this.favoriteMusic.push(music);
  }

  addMovie(movie) {
    if (!this.favoriteMovies.some((favMovie) => favMovie.id === movie.id)) {
      this.favoriteMovies.push(movie);
    }
  }

  addSeries(series) {
    if (!this.favoriteSeries.some((favSeries) => favSeries.id === series.id)) {
      this.favoriteSeries.push(series);
    }
  }

  addMusicCategory(musicCategory) {
    if(!this.musicTypes.some((category) => category === musicCategory )){
      this.musicTypes.push(musicCategory);
    }
  }

  addMovieCategory(movieCategory) {
    if(!this.movieTypes.some((category) => category === movieCategory)){
      this.movieTypes.push(movieCategory);
    }
  }

  addSeriesCategory(series) {
    if(!this.seriesTypes.some((category) => category === series)){
      this.seriesTypes.push(series);
    }
  }

  addHobby(hobby) {
    if(!this.hobbies.some((category) => category === hobby)){
      this.hobbies.push(hobby);
    }
  }
}

export default User;
