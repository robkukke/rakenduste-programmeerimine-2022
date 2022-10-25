const asyncHandler = require("express-async-handler")

const Todo = require("../models/todo.model")
const User = require("../models/user.model")

// @desc    Get todos
// @route   GET /api/todos
// @access  Private
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({ user: req.user.id })

  res.status(200).json(todos)
})

// @desc    Set todo
// @route   POST /api/todos
// @access  Private
const setTodo = asyncHandler(async (req, res) => {
  const { title, date, importance } = req.body

  if (!title || !date || !importance) {
    res.status(400)
    throw new Error("Please add all fields")
  }

  const todo = await Todo.create({
    user: req.user.id,
    title,
    date,
    importance,
    completed: false
  })

  res.status(200).json(todo)
})

// @desc    Update todo
// @route   PUT /api/todos/:id
// @access  Private
const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id)

  if (!todo) {
    res.status(400)
    throw new Error("Todo not found")
  }

  const user = await User.findById(req.user.id)

  // Check for user
  if (!user) {
    res.status(401)
    throw new Error("User not found")
  }

  // Make sure the logged in user matches the todo user
  if (todo.user.toString() !== user.id) {
    res.status(401)
    throw new Error("User not authorized")
  }

  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })

  res.status(200).json(updatedTodo)
})

// @desc    Delete todo
// @route   DELETE /api/todos/:id
// @access  Private
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id)

  if (!todo) {
    res.status(400)
    throw new Error("Todo not found")
  }

  const user = await User.findById(req.user.id)

  // Check for user
  if (!user) {
    res.status(401)
    throw new Error("User not found")
  }

  // Make sure the logged in user matches the todo user
  if (todo.user.toString() !== user.id) {
    res.status(401)
    throw new Error("User not authorized")
  }

  await todo.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getTodos,
  setTodo,
  updateTodo,
  deleteTodo
}
