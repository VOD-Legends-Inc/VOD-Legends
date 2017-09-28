const router = require("express").Router();
const coachController = require("../../controllers/coachController");

// Matches with "/api/books"
router.route("/")
  .get(coachController.findAll)
  .post(coachController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(coachController.findById)
  .put(coachController.update)
  .delete(coachController.remove);

module.exports = router;
