const router = require("express").Router();
const userRoutes = require("./user");

// Book routes
router.use("/api", userRoutes);

module.exports = router;
