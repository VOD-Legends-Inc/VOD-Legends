import axios from "axios";

export default {
  // Gets all requests
  getRequest: function() {
    return axios.get("/api/request");
  },
  // Gets the request with the given id
  getRequest: function(id) {
    return axios.get("/api/request/" + id);
  },
  // Deletes the request with the given id
  deleteRequest: function(id) {
    return axios.delete("/api/request/" + id);
  },
  // Saves a request to the database
  saveRequest: function(coachData) {
    return axios.post("/api/request", requestData);
  }
};