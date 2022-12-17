const express = require("express");
const router = express.Router();
const {
  getPriorities,
  setPriority,
  updatePriority,
  deletePriority,
} = require("../controllers/priorityController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getPriorities).post(protect, setPriority);
router
  .route("/:id")
  .delete(protect, deletePriority)
  .put(protect, updatePriority);

module.exports = router;
