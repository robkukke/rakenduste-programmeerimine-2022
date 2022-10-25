const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
const { errorHandler } = require("./middleware/error.middleware")
const connectDB = require("./config/db")
const port = process.env.PORT || 8080

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/todos", require("./routes/todo.routes"))
app.use("/api/users", require("./routes/user.routes"))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
