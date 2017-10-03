const router = require("express").Router();
const coachRoutes = require("./ProfileSection");

// coach profile routes
router.use("/coaches", coachRoutes);

module.exports = router;
