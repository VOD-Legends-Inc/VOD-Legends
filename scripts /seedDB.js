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
