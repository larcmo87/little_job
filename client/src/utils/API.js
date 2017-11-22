import axios from "axios";
import qs from "querystring";

export default {
 
 

  // Gets all Articles
  getUserById: function(id) {
    return axios.get("/api/user/"+ id);
  },
 
  // Deletes the Articles with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a Article to the database
  saveUser: function(userData) {
    console.log(userData);
    return axios.post("/api/user", userData);
  },

  // Saves a Article to the database
  saveJobAd: function(jobAdData) {
    console.log(jobAdData);
    return axios.post("/api/project", jobAdData);
  },
  getUserByLogin: function(userData) {
    console.log("User id in API = " + JSON.stringify(userData));
    return axios.post("/api/userlogin", userData);
  },

  getAllPostsByLocation: function(location) {
    console.log(location);
    return axios.post("/api/search", location);
  },

  getJobPostings: function(userData) {
    console.log(userData);
    return axios.get("/api/posts", userData);
  }

};