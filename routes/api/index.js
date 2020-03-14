const router = require("express").Router();
const adminRoutes = require("./admin");

// User routes
router.use("/admin", adminRoutes);

// Matches with "/api/numbers"
router.route("/")
    .get(userController.findAll)
    .post(userController.create);

module.exports = router;
