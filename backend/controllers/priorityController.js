const asyncHandler = require("express-async-handler");

const Priority = require("../models/priorityModel");
const User = require("../models/userModel");

// @desc    Get priorities
// @route   GET /api/priorities
// @access  Private
const getPriorities = asyncHandler(async (req, res) => {
  const priorities = await Priority.find({ user: req.user.id });

  res.status(200).json(priorities);
});

// @desc    Set priorities
// @route   POST /api/priorities
// @access  Private
const setPriority = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const priority = await Priority.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(priority);
});

// @desc    Update priority
// @route   PUT /api/priorities/:id
// @access  Private
const updatePriority = asyncHandler(async (req, res) => {
  const priority = await Priority.findById(req.params.id);

  if (!priority) {
    res.status(400);
    throw new Error("Priority not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the priority user
  if (priority.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedPriority = await Priority.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedPriority);
});

// @desc    Delete priority
// @route   DELETE /api/priorities/:id
// @access  Private
const deletePriority = asyncHandler(async (req, res) => {
  const priority = await Priority.findById(req.params.id);

  if (!priority) {
    res.status(400);
    throw new Error("Priority not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the priority user
  if (priority.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await priority.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getPriorities,
  setPriority,
  updatePriority,
  deletePriority,
};
