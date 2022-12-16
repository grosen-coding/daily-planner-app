const asyncHandler = require("express-async-handler");

const Priorities = require("../models/noteModel");
const User = require("../models/userModel");

// @desc    Get Priorities
// @route   GET /api/planner/priorities
// @access  Private
const getPriorities = asyncHandler(async (req, res) => {
  const priorities = await Priorities.find({ user: req.user.id });

  res.status(200).json(priorities);
});

//  @desc    Set Priority
//  @route   POST /api/planner/priorities
//  @access  Private
const setPriority = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text value");
  }

  const priority = await Priority.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(priority);
});
//  @desc    Update Priority
//  @route   PUT /api/planner/priorities/:id
//  @access  Private
const updatePriority = asyncHandler(async (req, res) => {
  const priority = await Priority.findById(req.params.id);

  if (!priority) {
    res.status(400);
    throw new Error("Top Priority not found");
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

  const updatedPriority = await Priority.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedPriority);
});
//  @desc    Delete Priority
//  @route   DELETE /api/planner/priorities/:id
//  @access  Private
const deletePriority = asyncHandler(async (req, res) => {
  const priority = await Priority.findById(req.params.id);

  if (!priority) {
    res.status(400);
    throw new Error("Top Priority not found");
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

  await priority.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getPriorities,
  setPriority,
  updatePriority,
  deletePriority,
};
