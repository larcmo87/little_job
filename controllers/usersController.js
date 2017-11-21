const db = require("../models");

// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    console.log("testing findByLogin... req: " + JSON.stringify(req.params));


    db.User
      .findOne({userId:req.body.userId, password:req.body.password})
      .then(dbModel => {
        console.log(dbModel)
        if(!dbModel){
          let response = {
            userId: "No user Found"
          }
          res.json(response);
        }else{
        res.json(dbModel);  
        }      
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .populate({path : 'project', populate : {path : 'bid'}})
      .exec((err,user) =>{
         if(err){
           return handleError(err);
         }
         
         res.json(user.project);
         console.log("get all projects and populate = " + user.project);
       
      })
     
  },
  create: function(req, res) {
    console.log("create====================")
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


};
