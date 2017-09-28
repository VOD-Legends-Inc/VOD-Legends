const router = require("express").Router();
const coachRoutes = require("./coaches");

// Coach routes
router.use("/coaches", coachRoutes);

module.exports = router;
