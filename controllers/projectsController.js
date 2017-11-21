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
    console.log("In the create route of projects req = " + JSON.stringify(req.body)) ;
    db.Project
      .create(req.body)
      .then(dbModel => {
          db.User.findOneAndUpdate({"_id": req.body.id}, { $push: { "project": dbModel._id } }, { new: true },function(err, notedoc) {
            // Send any errors to the browser
            if (err) {
              res.send(err);
            }
            // Or send the newdoc to the browser
            else {

              console.log(" note doe " + notedoc);
              res.send(notedoc);
            }
          });


          console.log("crate poject dbModle = " + dbModel);
      })
  },
  update: function(req, res) {
    db.Project
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.Project
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
