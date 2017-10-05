import axios from "axios";

export default {
  // Gets all coaches
  getCoaches: function() {
    return axios.get("/api/coach");
  },
  // Gets the coach with the given id
  getCoach: function(id) {
    return axios.get("/api/coach/" + id);
  },
  // Deletes the coach with the given id
  deleteCoach: function(id) {
    return axios.delete("/api/coach/" + id);
  },
  // Saves a coach to the database
  saveCoach: function(coachData) {
    return axios.post("/api/coach", coachData);
  }
};
