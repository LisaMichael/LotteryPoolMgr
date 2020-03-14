const router = require("express").Router();
const userRoutes = require("./members");

// Book routes
router.use("/members", userRoutes);
router.use("/user", userRoutes);

module.exports = router;
