const router = require("express").Router();
const bookRoutes = require("./books");
const gradesRoutes = require("./grades");
// Book routes
router.use("/books", bookRoutes);
router.use("/grades", gradesRoutes);

module.exports = router;
