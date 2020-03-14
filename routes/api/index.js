const router = require("express").Router();
const adminRoutes = require("./admin");

// User routes
router.use("/admin", adminRoutes);



module.exports = router;
