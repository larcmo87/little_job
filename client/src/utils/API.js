import axios from "axios";
import qs from "querystring";

export default {
 
 

  // Gets all Articles
  getJobPostings: function() {
    return axios.get("/api/project");
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
  getAllPostsByLocation: function(location) {
    console.log(location);
    return axios.post("/api/search", location);
  }
};