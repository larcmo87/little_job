const router = require("express").Router();
const userRoutes = require("./user");
const projectRoutes = require("./project");
const bidRoutes = require("./bid");



// Book routes
router.use("/api", userRoutes);
router.use("/api", projectRoutes);
router.use("/api", bidRoutes);

module.exports = router;




module.exports = router;
