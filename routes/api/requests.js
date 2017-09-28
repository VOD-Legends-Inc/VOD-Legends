const router = require("express").Router();
const requestController = require("../../controllers/requestController");

// Matches with "/api/request"
router.route("/")
  .get(requestController.findAll)
  .post(requestController.create);

// Matches with "/api/request/:id"
router
  .route("/:id")
  .get(requestController.findById)
  .put(requestController.update)
  .delete(requestController.remove);

module.exports = router;