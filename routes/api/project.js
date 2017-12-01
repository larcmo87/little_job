const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/project"
router.route("/project")
  .get(projectsController.findAll)
  .post(projectsController.create);

router.route("/projectAcceptBid")  
  .post(projectsController.findOne);

// Matches with "/api/project/:id"
router.route("/project/:id")
  .get(projectsController.findById)
  .put(projectsController.update)
  .delete(projectsController.remove);

  // router.route("/project/:location")
  // .get(projectsController.findByLocation);

module.exports = router;
