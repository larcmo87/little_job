const db = require("../models");


// Defining methods for the ProjectsController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Project
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
 
  create: function(req, res) {    
    db.Project
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUserIdPassword: function(req, res) {
   db.User
      .findOne({ userId: req.params.id , password: userId})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },