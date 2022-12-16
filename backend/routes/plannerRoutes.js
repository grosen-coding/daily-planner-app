const express = require("express");
const router = express.Router();
const {
  getNotes,
  setNote,
  updateNote,
  deleteNote,
} = require("../controllers/noteController");
const {
  getTodos,
  setTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");
const {
  getPriorities,
  setPriority,
  updatePriority,
  deletePriority,
} = require("../controllers/prioritiesController");
const {
  getReminders,
  setReminder,
  updateReminder,
  deleteReminder,
} = require("../controllers/remindersController");

const { protect } = require("../middleware/authMiddleware");

// NOTES
router.route("/notes").get(protect, getNotes).post(protect, setNote);
router.route("/notes/:id").delete(protect, deleteNote).put(protect, updateNote);

// TO DO
router.route("/todos").get(protect, getTodos).post(protect, setTodo);
router.route("/todos/:id").delete(protect, deleteTodo).put(protect, updateTodo);

// PRIORITIES
router
  .route("/priorities")
  .get(protect, getPriorities)
  .post(protect, setPriority);
router
  .route("/priorities/:id")
  .delete(protect, deletePriority)
  .put(protect, updatePriority);

// REMINDERS
router
  .route("/reminders")
  .get(protect, getReminders)
  .post(protect, setReminder);
router
  .route("/reminders/:id")
  .delete(protect, deleteReminder)
  .put(protect, updateReminder);

module.exports = router;
