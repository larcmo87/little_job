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
  /*FIND POSTER BY ID AND GET ALL POSTS AND BIDS THAT ARE REALTED TO POST*/
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .populate({path : 'project', populate : {path : 'bid'}})
      .exec((err,user) =>{
         if(err){
           return handleError(err);
         }
         
         res.json(user.project);
        
       
      })
     
  },
 /* FIND MECHANIC BY ID AND GET ALL BIDS AND POSTS THEY ARE RELATED TO*/
   findMechanicById: function(req, res) {
    db.User
      .findById(req.params.id)
      .populate({path : 'bid', populate : {path : 'project'}})
      .exec((err,user) =>{
         if(err){
           return handleError(err);
         }
         console.log("Mechanic bids = " + user);
         res.json(user);
         //console.log("get all projects and populate = " + user.project);
       
      })
     
  },
  /* FIND MECHANIC BY ID AND GET ALL BIDS AND POSTS THEY ARE RELATED TO*/
   findBylocation: function(req, res) {
    
    db.User
      .find({$and : [
              {$or : [{city : req.params.location},{zip : req.params.location}]},
              {user_type : "poster"},
              {project : { $gt: [] }}
            ]
          })
      .populate({path : 'project', populate : {path : 'bid'}})
      .exec((err,user) =>{
         if(err){
           return err;
         }
         
         res.json(user);
         console.log("get all projects and populate = " + user);
       
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
