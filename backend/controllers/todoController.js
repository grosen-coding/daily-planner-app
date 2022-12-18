const asyncHandler = require("express-async-handler");

const Todo = require("../models/todoModel");

// @desc    Get Todos
// @route   GET /api/planner/todos
// @access  Private
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({ user: req.user.id });

  res.status(200).json(todos);
});

//  @desc    Set To-do
//  @route   POST /api/planner/todos
//  @access  Private
const setTodo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text value");
  }

  const todo = await Todo.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(todo);
});
//  @desc    Update To-do
//  @route   PUT /api/planner/todos/:id
//  @access  Private
const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error("To-do not found");
  }

  const user = await User.findById(req.user.id);

  // Check is user exists
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure logged in user matches to-do user
  if (todo.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTodo);
});
//  @desc    Delete Todos
//  @route   DELETE /api/planner/todos/:id
//  @access  Private
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error("To-do not found");
  }

  const user = await User.findById(req.user.id);

  // Check is user exists
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure logged in user matches to-do user
  if (todo.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await todo.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTodos,
  setTodo,
  updateTodo,
  deleteTodo,
};
