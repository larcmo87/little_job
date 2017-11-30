const db = require("../models");

// Defining methods for the BidsController
module.exports = {
  findAll: function(req, res) {
    db.Bid
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Bid
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("In bid controller");
     db.Bid
      .create(req.body)
      .then(dbModel => {
          db.User.findOneAndUpdate({"_id": req.body.id}, { $push: { "bid": dbModel._id } }, { new: true },function(err, notedoc) {
            // Send any errors to the browser
            if (err) {
              res.send(err);
            }
            // Or send the newdoc to the browser
            else { 
              db.Project.findOneAndUpdate({"_id": req.body.project}, { $push: { "bid": dbModel._id } }, { new: true },function(err, biddoc) {
                // Send any errors to the browser
                if (err) {
                  res.send(err);
                }
                // Or send the newdoc to the browser
                else {

                  console.log(" biddoc = " + biddoc);
                 
                }
              });
            }
          });


          console.log("crate poject dbModle = " + dbModel);
      })


  },
  update: function(req, res) {
    db.Bid
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log("hitting the controller: " + req.params.id);
    db.Bid
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
