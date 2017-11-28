const router = require("express").Router();
const bidsController = require("../../controllers/bidsController");

// Matches with "/api/bid"
router.route("/bid")
  .get(bidsController.findAll)
  .post(bidsController.create);

// Matches with "/api/bid/:id"
router.route("/bid/:id")
  .get(bidsController.findById)
  .put(bidsController.update)
  .delete(bidsController.remove);

module.exports = router;