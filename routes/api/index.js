const router = require("express").Router();
const coachRoutes = require("./coaches");
const studentRoutes = require("./students");
const requestRoutes = require("./requests");

// Coach routes
router.use("/coaches", coachRoutes);
router.use("/students", studentRoutes);
router.use("/requests", requestRoutes);

module.exports = router;
