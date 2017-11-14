const router = require("express").Router();
const userRoutes = require("./user");
const bidRoutes = require("./bid");
const projectRoutes = require("./project");

// user routes
router.use("/api", userRoutes);
// bid routes
router.use("/api", bidRoutes);
// project routes
router.use("/api", projectRoutes);

module.exports = router;
