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

// Reminders

// NOTES
router.route("/notes").get(getNotes).post(setNote);
router.route("/notes/:id").delete(deleteNote).put(updateNote);

// TO DO
router.route("/todos").get(getTodos).post(setTodo);
router.route("/todos/:id").delete(deleteTodo).put(updateTodo);

// PRIORITIES
router.route("/priorities").get(getPriorities).post(setPriority);
router.route("/priorities/:id").delete(deletePriority).put(updatePriority);

// REMINDERS
router.route("/reminders").get(getReminders).post(setReminder);
router.route("/reminders/:id").delete(deleteReminder).put(updateReminder);

module.exports = router;
