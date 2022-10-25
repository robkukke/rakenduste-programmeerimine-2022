const express = require("express")
const router = express.Router()
const {
  getTodos,
  setTodo,
  updateTodo,
  deleteTodo
} = require("../controllers/todo.controller")
const { protect } = require("../middleware/auth.middleware")

router.route("/").get(protect, getTodos).post(protect, setTodo)
router.route("/:id").put(protect, updateTodo).delete(protect, deleteTodo)

module.exports = router
