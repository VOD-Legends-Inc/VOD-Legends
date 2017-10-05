const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  email: {type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  lolUserName: { type: String, required: true },
  role: { type: String, required: true },
  bio: String,
  password: { type: String, required: true }
});

const Student = mongoose.model("Students", studentSchema);

module.exports = Student;
