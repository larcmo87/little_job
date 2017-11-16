const router = require("express").Router();
const userRoutes = require("./user");
const projectRoutes = require("./project");

// Book routes
router.use("/api", userRoutes);
router.use("/api", projectRoutes);

module.exports = router;




module.exports = router;
