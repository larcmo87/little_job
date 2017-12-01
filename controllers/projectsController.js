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
  findOne: function(req, res) {
    console.log("testing findOne Accept bid... req: " + JSON.stringify(req.body));

    //FIND THE PROJECT BY ID
    db.Project
      .findOne({_id:req.body.postId})
      .then(dbModel => {
        console.log(dbModel);
        console.log("dbModel.bid.length " + dbModel.bid.length);

        for(let i = 0; i < dbModel.bid.length; i++){
          console.log("dbModel.bid[i] = " + dbModel.bid[i]);
          console.log("req.bidId = " + req.body.bidId);
          if(dbModel.bid[i] == req.body.bidId){
            db.Bid
              .findOneAndUpdate({ _id: dbModel.bid[i] }, {accepted: "true"})
              .then(dbBidModel => {
                 // res.json(dbBidModel);
                })
              .catch(err => res.status(422).json(err));
          }else{
            db.Bid
              .findOneAndUpdate({ _id: dbModel.bid[i] }, {accepted: "false"})
              .then(dbBidModel =>{
                 // res.json(dbBidModel);
                })
              
              .catch(err => res.status(422).json(err));
          }
        } 
      })      
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
