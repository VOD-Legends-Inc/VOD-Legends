import axios from "axios";

export default {
  // Gets all coaches
  getCoach: function() {
    return axios.get("/api/coaches");
  },
  // Gets the coach with the given id
  getCoach: function(id) {
    return axios.get("/api/coaches/" + id);
  },
  // Deletes the coach with the given id
  deleteCoach: function(id) {
    return axios.delete("/api/coaches/" + id);
  },
  // Saves a coach to the database
  saveCoach: function(coachData) {
    return axios.post("/api/coaches", coachData);
  }
};
