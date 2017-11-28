const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/user"
router.route("/user")
  .get(usersController.findAll)
  
  .post(usersController.create);

router.route("/userlogin")  
  .post(usersController.findOne);
  


// Matches with "/api/user/:id" Used to get Poster by Id
router
  .route("/user/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

  // Matches with "/api/mechanic/:id" Used to get Mechanic by Id
router
  .route("/mechanic/:id")
  .get(usersController.findMechanicById)
  .put(usersController.update)
  .delete(usersController.remove);

router.route("/location/:location")
  .get(usersController.findBylocation);  
 


module.exports = router;
