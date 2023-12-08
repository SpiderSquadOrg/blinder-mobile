import User from "../models/user";
import Music from "../models/music";
import Movie from "../models/movie";
import Series from "../models/series";
import Book from "../models/book";

export let UserList = [
  new User(
    "1",
    "user@gmail.com",
    "userBlinder",
    "user",
    "us",
    "1234",
    "female",
    "23-02-2000",
    "Eskişehir. Turkey",
    "https://i.pinimg.com/474x/15/25/f9/1525f94766ba26d502220effe8981689.jpg",
    ["Pop", "Rock", "Jazz", "Hip-Hop"],
    [
      {
        title: "Sen Ağlama",
        artist: "Sezen Aksu",
        image:
          "https://images.genius.com/b539a3d1bdfe8268ac0cc512c5df4806.1000x1000x1.jpg",
      },
      {
        title: "Unuttun Mu Beni",
        artist: "Sezen Aksu",
        image:
          "https://images.genius.com/b539a3d1bdfe8268ac0cc512c5df4806.1000x1000x1.jpg",
      },
      {
        title: "Yalnızca Sitem",
        artist: "Sezen Aksu",
        image:
          "https://images.genius.com/b539a3d1bdfe8268ac0cc512c5df4806.1000x1000x1.jpg",
      },
      {
        title: "İki Yabancı",
        artist: "Teoman",
        image:
          "https://i.scdn.co/image/ab67616d0000b273d4ebc347832506c4b02068aa",
      },
    ],
    ["Aksiyon", "Macera", "Komedi", "Animasyon"],
    [
      {
        name: "Harry Potter ve Felsefe Taşı",
        year: 2001,
        image:
          "https://i.dr.com.tr/cache/600x600-0/originals/0000000105599-1.jpg",
      },
      {
        name: "Harry Potter ve Azkaban Tutsağı",
        year: 2003,
        image:
          "https://i.dr.com.tr/cache/600x600-0/originals/0000000105599-1.jpg",
      },
      {
        name: "Harry Potter ve Zümrüdüanka Yoldaşlığı",
        year: 2005,
        image:
          "https://i.dr.com.tr/cache/600x600-0/originals/0000000105599-1.jpg",
      },
    ],
    ["Komedi", "Aksiyon", "Romantik", "Gerilim", "Korku", "Gizem"],
    [
      {
        name: "Walking Dead",
        year: 2001,
        image:
          "https://upload.wikimedia.org/wikipedia/ru/1/19/The_Walking_Dead_%28season_2%29.jpg",
      },
      {
        name: "Game of Thrones",
        year: 2001,
        image:
          "https://upload.wikimedia.org/wikipedia/ru/1/19/The_Walking_Dead_%28season_2%29.jpg",
      },
      {
        name: "The Simpsons",
        year: 2001,
        image:
          "https://upload.wikimedia.org/wikipedia/ru/1/19/The_Walking_Dead_%28season_2%29.jpg",
      },
    ],
    ["Resim Yapma", "Müzik Dinleme", "Yazı Yazma", "Dil Öğrenme", "Şiir Yazma"]
  ),
];

export let MusicList = [
  new Music(
    1,
    "Sen Ağlama",
    "Sezen Aksu",
    "https://images.genius.com/b539a3d1bdfe8268ac0cc512c5df4806.1000x1000x1.jpg"
  ),
  new Music(
    2,
    "Zalim",
    "Sezen Aksu",
    "https://images.genius.com/b539a3d1bdfe8268ac0cc512c5df4806.1000x1000x1.jpg"
  ),
  new Music(
    3,
    "Unuttun Mu Beni",
    "Sezen Aksu",
    "https://images.genius.com/b539a3d1bdfe8268ac0cc512c5df4806.1000x1000x1.jpg"
  ),
  new Music(
    4,
    "Geri Dön",
    "Sezen Aksu",
    "https://images.genius.com/b539a3d1bdfe8268ac0cc512c5df4806.1000x1000x1.jpg"
  ),
  new Music(
    5,
    "Yalnızca Sitem",
    "Sezen Aksu",
    "https://images.genius.com/b539a3d1bdfe8268ac0cc512c5df4806.1000x1000x1.jpg"
  ),
  new Music(
    6,
    "Haydi Gel Benimle Ol",
    "Sezen Aksu",
    "https://images.genius.com/b539a3d1bdfe8268ac0cc512c5df4806.1000x1000x1.jpg"
  ),
  new Music(
    7,
    "Bana Öyle Bakma",
    "Teoman",
    "https://i.scdn.co/image/ab67616d0000b273d4ebc347832506c4b02068aa"
  ),
  new Music(
    8,
    "İki Yabancı",
    "Teoman",
    "https://i.scdn.co/image/ab67616d0000b273d4ebc347832506c4b02068aa"
  ),
  new Music(
    9,
    "Keskin Bıçak",
    "Sezen Aksu",
    "https://images.genius.com/b539a3d1bdfe8268ac0cc512c5df4806.1000x1000x1.jpg"
  ),
  new Music(
    10,
    "Yansın İstanbul",
    "Sezen Aksu",
    "https://images.genius.com/b539a3d1bdfe8268ac0cc512c5df4806.1000x1000x1.jpg"
  ),
  new Music(
    11,
    "Hata",
    "Sezen Aksu",
    "https://images.genius.com/b539a3d1bdfe8268ac0cc512c5df4806.1000x1000x1.jpg"
  ),
  new Music(
    12,
    "Kupa Kızı ve Sinek Valesi",
    "Teoman",
    "https://i.scdn.co/image/ab67616d0000b273d4ebc347832506c4b02068aa"
  ),
];

export let MovieList = [
  new Movie(
    1,
    "Harry Potter ve Felsefe Taşı",
    2001,
    "https://i.dr.com.tr/cache/600x600-0/originals/0000000105599-1.jpg"
  ),
  new Movie(
    2,
    "Harry Potter ve Sırlar Odası",
    2002,
    "https://i.dr.com.tr/cache/600x600-0/originals/0000000105599-1.jpg"
  ),
  new Movie(
    3,
    "Harry Potter ve Azkaban Tutsağı",
    2004,
    "https://i.dr.com.tr/cache/600x600-0/originals/0000000105599-1.jpg"
  ),
  new Movie(
    4,
    "Harry Potter ve Ateş Kadehi",
    2005,
    "https://i.dr.com.tr/cache/600x600-0/originals/0000000105599-1.jpg"
  ),
  new Movie(
    5,
    "Harry Potter ve Zümrüdüanka Yoldaşlığı",
    2007,
    "https://i.dr.com.tr/cache/600x600-0/originals/0000000105599-1.jpg"
  ),
  new Movie(
    6,
    "Harry Potter ve Melez Prens",
    2009,
    "https://i.dr.com.tr/cache/600x600-0/originals/0000000105599-1.jpg"
  ),
  new Movie(
    7,
    "Harry Potter ve Ölüm Yadigarları Bölüm 1",
    2010,
    "https://i.dr.com.tr/cache/600x600-0/originals/0000000105599-1.jpg"
  ),
  new Movie(
    8,
    "Harry Potter ve Ölüm Yadigarları Bölüm 2",
    2011,
    "https://i.dr.com.tr/cache/600x600-0/originals/0000000105599-1.jpg"
  ),
];

export let SeriesList = [
  new Series(
    1,
    "Walking Dead",
    2001,
    "https://upload.wikimedia.org/wikipedia/ru/1/19/The_Walking_Dead_%28season_2%29.jpg"
  ),
  new Series(
    2,
    "Breaking Bad",
    2008,
    "https://upload.wikimedia.org/wikipedia/ru/1/19/The_Walking_Dead_%28season_2%29.jpg"
  ),
  new Series(
    3,
    "Stranger Things",
    2016,
    "https://upload.wikimedia.org/wikipedia/ru/1/19/The_Walking_Dead_%28season_2%29.jpg"
  ),
  new Series(
    4,
    "Game of Thrones",
    2011,
    "https://upload.wikimedia.org/wikipedia/ru/1/19/The_Walking_Dead_%28season_2%29.jpg"
  ),
  new Series(
    5,
    "The Simpsons",
    1989,
    "https://upload.wikimedia.org/wikipedia/en/a/ab/Simpsons_-_Opening_Sequence.jpg"
  ),
  new Series(
    6,
    "Friends",
    1994,
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Friends_Season_1_cast.png/339px-Friends_Season_1_cast.png"
  ),
  new Series(
    7,
    "The Office",
    2005,
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/The_Office%2C_US_TV_series%2C_title_card.jpg/324px-The_Office%2C_US_TV_series%2C_title_card.jpg"
  ),
  new Series(
    8,
    "Black Mirror",
    2011,
    "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Black_Mirror_logo.jpg/250px-Black_Mirror_logo.jpg"
  ),
  new Series(
    9,
    "Sherlock",
    2010,
    "https://upload.wikimedia.org/wikipedia/en/e/e8/Sherlock_titlecard.jpg"
  ),
  new Series(
    10,
    "Westworld",
    2016,
    "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Westworld_title_card.jpg/250px-Westworld_title_card.jpg"
  ),
];

/*export let BookList = [
  new Book(
    1,
    "Küçük Prens",
    "Antoine de Saint-Exupéry",
    "https://i.dr.com.tr/cache/500x400-0/originals/0001785575001-1.jpg"
  ),
  new Book(
    2,
    "1984",
    "George Orwell",
    "https://i.dr.com.tr/cache/500x400-0/originals/0001785575001-1.jpg"
  ),
  new Book(
    3,
    "Simyacı",
    "Paulo Coelho",
    "https://i.dr.com.tr/cache/500x400-0/originals/0001785575001-1.jpg"
  ),
  new Book(
    4,
    "Harry Potter ve Felsefe Taşı",
    "J.K. Rowling",
    "https://i.dr.com.tr/cache/500x400-0/originals/0001785575001-1.jpg"
  ),
  new Book(
    5,
    "Savaş ve Barış",
    "Lev Tolstoy",
    "https://i.dr.com.tr/cache/500x400-0/originals/0001785575001-1.jpg"
  ),
  new Book(
    6,
    "Cesur Yeni Dünya",
    "Aldous Huxley",
    "https://i.dr.com.tr/cache/500x400-0/originals/0001785575001-1.jpg"
  ),
  new Book(
    7,
    "Yabancı",
    "Albert Camus",
    "https://i.dr.com.tr/cache/500x400-0/originals/0001785575001-1.jpg"
  ),
  new Book(
    8,
    "Otomatik Portakal",
    "Anthony Burgess",
    "https://i.dr.com.tr/cache/500x400-0/originals/0001785575001-1.jpg"
  ),
  new Book(
    9,
    "Uğultulu Tepeler",
    "Emily Brontë",
    "https://i.dr.com.tr/cache/500x400-0/originals/0001785575001-1.jpg"
  ),
  new Book(
    10,
    "Dönüşüm",
    "Franz Kafka",
    "https://i.dr.com.tr/cache/500x400-0/originals/0001785575001-1.jpg"
  ),
]; */

export let user1 = new User(
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
  ["Pop", "Rock", "Jazz", "Hip-Hop"],
  [
    {
      title: "Sen Ağlama",
      artist: "Sezen Aksu",
      image:
        "https://images.genius.com/b539a3d1bdfe8268ac0cc512c5df4806.1000x1000x1.jpg",
    },
    {
      title: "Unuttun Mu Beni",
      artist: "Sezen Aksu",
      image:
        "https://images.genius.com/b539a3d1bdfe8268ac0cc512c5df4806.1000x1000x1.jpg",
    },
    {
      title: "Yalnızca Sitem",
      artist: "Sezen Aksu",
      image:
        "https://images.genius.com/b539a3d1bdfe8268ac0cc512c5df4806.1000x1000x1.jpg",
    },
    {
      title: "İki Yabancı",
      artist: "Teoman",
      image: "https://i.scdn.co/image/ab67616d0000b273d4ebc347832506c4b02068aa",
    },
  ],
  ["Aksiyon", "Macera", "Komedi", "Animasyon"],
  [
    {
      name: "Harry Potter ve Felsefe Taşı",
      year: 2001,
      image:
        "https://i.dr.com.tr/cache/600x600-0/originals/0000000105599-1.jpg",
    },
    {
      name: "Harry Potter ve Azkaban Tutsağı",
      year: 2003,
      image:
        "https://i.dr.com.tr/cache/600x600-0/originals/0000000105599-1.jpg",
    },
    {
      name: "Harry Potter ve Zümrüdüanka Yoldaşlığı",
      year: 2005,
      image:
        "https://i.dr.com.tr/cache/600x600-0/originals/0000000105599-1.jpg",
    },
  ],
  ["Komedi", "Aksiyon", "Romantik", "Gerilim", "Korku", "Gizem"],
  [
    {
      name: "Walking Dead",
      year: 2001,
      image:
        "https://upload.wikimedia.org/wikipedia/ru/1/19/The_Walking_Dead_%28season_2%29.jpg",
    },
    {
      name: "Game of Thrones",
      year: 2001,
      image:
        "https://upload.wikimedia.org/wikipedia/ru/1/19/The_Walking_Dead_%28season_2%29.jpg",
    },
    {
      name: "The Simpsons",
      year: 2001,
      image:
        "https://upload.wikimedia.org/wikipedia/ru/1/19/The_Walking_Dead_%28season_2%29.jpg",
    },
  ],
  ["Resim Yapma", "Müzik Dinleme", "Yazı Yazma", "Dil Öğrenme", "Şiir Yazma"]
);
