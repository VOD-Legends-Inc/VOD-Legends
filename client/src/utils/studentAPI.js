import axios from "axios";

export default {
  // Gets all students
  getStudent: function() {
    return axios.get("/api/student");
  },
  // Gets the student with the given id
  getStudent: function(id) {
    return axios.get("/api/student/" + id);
  },
  // Deletes the student with the given id
  deleteStudent: function(id) {
    return axios.delete("/api/student/" + id);
  },
  // Saves a student to the database
  saveStudent: function(studentData) {
    return axios.post("/api/student", studentData);
  }
};