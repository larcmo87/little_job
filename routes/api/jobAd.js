const router = require("express").Router();
const jobAdsController = require("../../controllers/jobAdsController");

// Matches with "/api/project"
router.route("/project")
  .get(jobAdsController.findAll)
  .post(jobAdsController.create);

// Matches with "/api/project/:id"
router.route("/project/:id")
  .get(jobAdsController.findById)
  .put(jobAdsController.update)
  .delete(jobAdsController.remove);

  // router.route("/project/:location")
  // .get(projectsController.findByLocation);

module.exports = router;