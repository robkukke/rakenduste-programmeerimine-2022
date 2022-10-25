const mongoose = require("mongoose")

const todoSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    title: {
      type: String,
      required: [true, "Please add a title value"]
    },
    date: {
      type: Date,
      required: [true, "Please add a date value"]
    },
    importance: {
      type: Number,
      required: [true, "Please add an importance value"],
      enum: [1, 2, 3, 4, 5],
      default: 1
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("Todo", todoSchema)
