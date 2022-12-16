const asyncHandler = require("express-async-handler");

const Reminders = require("../models/noteModel");

// @desc    Get Reminders
// @route   GET /api/planner/reminders
// @access  Private
const getReminders = asyncHandler(async (req, res) => {
  const reminders = await Reminders.find({ user: req.user.id });

  res.status(200).json(reminders);
});

//  @desc    Set Reminder
//  @route   POST /api/planner/reminders
//  @access  Private
const setReminder = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text value");
  }

  const reminder = await Reminder.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(reminder);
});
//  @desc    Update Reminder
//  @route   PUT /api/planner/reminders/:id
//  @access  Private
const updateReminder = asyncHandler(async (req, res) => {
  const reminder = await Reminder.findById(req.params.id);

  if (!reminder) {
    res.status(400);
    throw new Error("Reminder not found");
  }

  const user = await User.findById(req.user.id);

  // Check is user exists
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure logged in user matches note user
  if (note.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedReminder = await Reminder.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedReminder);
});
//  @desc    Delete Reminder
//  @route   DELETE /api/planner/reminders/:id
//  @access  Private
const deleteReminder = asyncHandler(async (req, res) => {
  const reminder = await Reminder.findById(req.params.id);

  if (!reminder) {
    res.status(400);
    throw new Error("Reminder not found");
  }

  const user = await User.findById(req.user.id);

  // Check is user exists
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure logged in user matches note user
  if (note.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await reminder.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getReminders,
  setReminder,
  updateReminder,
  deleteReminder,
};