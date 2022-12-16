const asyncHandler = require("express-async-handler");

const Note = require("../models/noteModel");
const User = require("../models/userModel");

// @desc    Get Notes
// @route   GET /api/planner/notes
// @access  Private
const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.user.id });

  res.status(200).json(notes);
});

//  @desc    Set Note
//  @route   POST /api/planner/notes
//  @access  Private
const setNote = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text value");
  }

  const note = await Note.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(note);
});
//  @desc    Update Note
//  @route   PUT /api/planner/notes/:id
//  @access  Private
const updateNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) {
    res.status(400);
    throw new Error("Note not found");
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

  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedNote);
});
//  @desc    Delete Note
//  @route   DELETE /api/planner/notes/:id
//  @access  Private
const deleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) {
    res.status(400);
    throw new Error("Note not found");
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

  await note.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getNotes,
  setNote,
  updateNote,
  deleteNote,
};
