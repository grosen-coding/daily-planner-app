// @desc    Get Notes
// @route   GET /api/planner/notes
// @access  Private
const getNotes = (req, res) => {
  res.status(200).json({ message: "Get Notes" });
};

//  @desc    Set Note
//  @route   POST /api/planner/notes
//  @access  Private
const setNote = (req, res) => {
  res.status(200).json({ message: "Create Note" });
};
//  @desc    Update Note
//  @route   PUT /api/planner/notes/:id
//  @access  Private
const updateNote = (req, res) => {
  res.status(200).json({ message: `Update note ${req.params.id}` });
};
//  @desc    Get Notes
//  @route   GET /api/planner/notes
//  @access  Private
const deleteNote = (req, res) => {
  res.status(200).json({ message: `Delete note ${req.params.id}` });
};

module.exports = {
  getNotes,
  setNote,
  updateNote,
  deleteNote,
};
