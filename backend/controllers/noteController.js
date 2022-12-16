const asyncHandler = require("express-async-handler");

// @desc    Get Notes
// @route   GET /api/planner/notes
// @access  Private
const getNotes = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Notes" });
});

//  @desc    Set Note
//  @route   POST /api/planner/notes
//  @access  Private
const setNote = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text value");
  }

  res.status(200).json({ message: "Create Note" });
});
//  @desc    Update Note
//  @route   PUT /api/planner/notes/:id
//  @access  Private
const updateNote = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update note ${req.params.id}` });
});
//  @desc    Get Notes
//  @route   GET /api/planner/notes
//  @access  Private
const deleteNote = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete note ${req.params.id}` });
});

module.exports = {
  getNotes,
  setNote,
  updateNote,
  deleteNote,
};
