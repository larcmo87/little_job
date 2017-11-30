import axios from "axios";

export default {
 
 

  // Gets poster's job posts
  getPosterById: function(id) {
    return axios.get("/api/user/"+ id);
  },
 // Gets mechanics job bids
  getMechanicById: function(id) {
    return axios.get("/api/mechanic/"+ id);
  },
  getJobPostings: function(location) {
    console.log(location);
   return axios.get("api/location/" +  location);
  },
  // Deletes the Articles with the given id
  deleteProject: function(id) {
    return axios.delete("/api/project/" + id);
  },
  deleteBid: function(id) {
    return axios.delete("/api/bid/" + id);
  },
  // Saves a Article to the database
  saveUser: function(userData) {
    console.log(userData);
    return axios.post("/api/user", userData);
  },
  // Saves a Job Ad to the database
  saveJobAd: function(jobAdData) {
    console.log(jobAdData);
    return axios.post("/api/project", jobAdData);
  },
  // Saves a bid to the database
  saveJobBid: function(jobBidData) {
    console.log(jobBidData);
    return axios.post("/api/bid", jobBidData);
  },
  getUserByLogin: function(userData) {
    console.log("User id in API = " + JSON.stringify(userData));
    return axios.post("/api/userlogin", userData);
  },
   postProjectBidAccept: function(projectData) {
    console.log("projectData = " + JSON.stringify(projectData));
    return axios.post("/api/projectAcceptBid", projectData);
  }
  

};