const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  student: { type: String, required: true },
  coach: { type: String, required: true },
  titleOfVOD: { type: String, required: true },
  vodURL: { type: String, required: true },
  messageToCoach: { type: String, required: true },
  stage: { type: String, required: true },
  comments: Array,
  finalReport: Object,
});

const Request = mongoose.model("Requests", requestSchema);

module.exports = Request;