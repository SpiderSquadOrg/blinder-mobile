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
    possibleMatches
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
    this.possibleMatches = possibleMatches;
  }
}

export default User;
