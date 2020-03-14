const router = require("express").Router();
const adminRoutes = require("./admin");

// User routes
router.use("/admin", adminRoutes);

router.use("/user", userRoutes);

module.exports = router;
