const express = require("express");
const router = express.Router();
const {
  getNotes,
  setNote,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");

// Priorities, Reminders, ToDo, Notes

router.route("/notes").get(getNotes).post(setNote);
router.route("/notes/:id").delete(deleteNote).put(updateNote);

module.exports = router;
