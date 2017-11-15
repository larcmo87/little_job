const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/project"
router.route("/project")
  .get(projectsController.findAll)
  .post(projectsController.create);

// Matches with "/api/project/:id"
router
  .route("/project/:id")
  .get(projectsController.findById)
  .put(projectsController.update)
  .delete(projectsController.remove);

module.exports = router;
