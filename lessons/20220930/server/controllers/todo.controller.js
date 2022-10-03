const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
  title: String,
  date: Date,
  importance: Number,
  completed: Boolean
})

const Todo = mongoose.model("Todo", todoSchema)

exports.create = async (req, res) => {
  const { title, date, importance, completed } = req.body

  const todo = await Todo.create({ title, date, importance, completed })
  res.send(todo)
}

exports.read = async (req, res) => {
  const todos = await Todo.find({}, { _id: 0, __v: 0 })
  res.send(todos)
}

exports.update = async (req, res) => {
  const { title, completed } = req.body

  const todo = await Todo.findOneAndUpdate(
    { title: title },
    { completed: completed }
  )
  res.send(todo)
}

exports.delete = async (req, res) => {
  const { title } = req.body

  const todo = await Todo.findOneAndDelete({ title: title })
  res.send(todo)
}
