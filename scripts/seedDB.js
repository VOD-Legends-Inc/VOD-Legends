const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/vodLegends",
  {
    useMongoClient: true
  }
);
///---------------------------Coach Test Seed----------------------------------///

const coachSeed = [
  {
    firstName: "Legend",
    lastName: "Calabrese",
    lolUserName: "sil3ntsnip3r",
    role: "adc",
    elo: "ELO Ranking",
    server: "USA",
    mainChampion: "Sniper",
    language: "English",
    rating: "9/10",
    bio: "Experienced Silent Sniper",
    password: "canttouchthis"
  }
];

db.Coaches
  .remove({})
  .then(() => db.Coaches.collection.insertMany(coachSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

///---------------------------Student Test Seed----------------------------------///


  const studentSeed = [
  {
    firstName: "student",
    lastName: "rookie",
    lolUserName: "RookTastic",
    role: "adc",
    request: "Look at my video please",
    bio: "The most awesome rookie ever",
    password: "rook123"
  }
];
console.log(studentSeed);
db.Student
  .remove({})
  .then(() => db.Student.collection.insertMany(studentSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



///---------------------------Request Test Seed----------------------------------///


  const requestSeed = [
  {
    student: "student name",
    coach: "coach name",
    titleOfVOD: "adc",
    vodURL: "blehal.com",
    messageToCoach: "hey coach!",
    comments: "nice to meet you",
    noteToStudent: "work harder on your game skills",
    }
];
console.log(requestSeed);
db.Request
  .remove({})
  .then(() => db.Request.collection.insertMany(requestSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
