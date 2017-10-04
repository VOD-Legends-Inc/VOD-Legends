import axios from "axios";

export default {
  // Gets all requests
<<<<<<< HEAD
  getRequest: function() {
    return axios.get("/api/request");
=======
  getRequests: function() {
    return axios.get("/api/requests");
>>>>>>> 316ff4e43c2e333be451bdd4590782c3fd8d6773
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
<<<<<<< HEAD
  saveRequest: function(coachData) {
    return axios.post("/api/request", requestData);
=======
  saveRequest: function(requestData) {
    return axios.post("/api/requests", requestData);
>>>>>>> 316ff4e43c2e333be451bdd4590782c3fd8d6773
  }
};