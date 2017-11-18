const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/user"
router.route("/user")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/books/:id"
router
  .route("/user/:id")
  .get(usersController.findById)
  .get(usersController.findByLogin)
  .put(usersController.update)
  .delete(usersController.remove);
  
module.exports = router;
