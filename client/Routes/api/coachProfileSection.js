const router = require("express").Router();
const cProfileController = require("../../Controller/cProfileController");

// Matches with "/api/coach"
router.route("/")
  .get(cProfileController.findAll)
  .post(cProfileController.create);

// Matches with "/api/coach/:id"
router
  .route("/:id")
  .get(cProfileController.findById)
  .put(cProfileController.update)
  .delete(cProfileController.remove);

module.exports = router;
