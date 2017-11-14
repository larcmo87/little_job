const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/project"
router.route("/project")
  .get(projectsControllerr.findAll)
  .post(projectsControllerr.create);

// Matches with "/api/project/:id"
router
  .route("/project/:id")
  .get(projectsControllerr.findById)
  .put(projectsControllerr.update)
  .delete(projectsControllerr.remove);

module.exports = router;
