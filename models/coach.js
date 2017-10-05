const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coachSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  lolUserName: { type: String, required: true },
  role: { type: String, required: true },
  elo: String,
  server: { type: String, required: true },
  mainChampion: { type: String, required: true },
  language: { type: String, required: true },
  rating: { type: String, required: true },
  bio: String,
  password: { type: String, required: true },
  studentsArray: Array
});

const Coach = mongoose.model("Coaches", coachSchema);

module.exports = Coach;
