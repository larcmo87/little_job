import axios from "axios";
import qs from "querystring";

export default {
  // Gets all books
  getNYTArcitle: function(query, begin_date, end_date) {
    let searchData = qs.stringify({
      apikey: "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
      query: query,
      begin_date: begin_date,
      end_date: end_date,
      sort: "newest"
    });
    
   return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?${searchData}`, {
        
      });
  },

  // Gets all Articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
 
  // Deletes the Articles with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a Article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};