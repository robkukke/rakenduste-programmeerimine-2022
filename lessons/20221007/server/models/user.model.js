const { Schema, model } = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: String, enum: ["pending", "active"], default: "pending" }
  },
  { timestamps: true }
)

userSchema.statics.signup = async ({ name, email, password }) => {
  return new Promise(async (resolve, reject) => {
    const user = await User.findOne({ email })
    if (user) reject("User already exists")

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = new User({
      name,
      email,
      password: hashPassword
    })

    newUser.save(err => {
      if (err) return reject(err)
      resolve(newUser)
    })
  })
}

userSchema.statics.login = async ({ name, email, password }) => {
  return new Promise(async (resolve, reject) => {
    const user = await User.findOne({ name, email })
    if (!user) reject("User doesn't exist")

    const hashPassword = await bcrypt.compare(password, user.password)
    if (!hashPassword) reject("Incorrect password")

    const existingUser = new User({
      name: user.name,
      email: user.email,
      password: user.password
    })

    existingUser.validate(err => {
      if (err) return reject(err)
      const token = jwt.sign(
        {
          name: user.name,
          email: user.email,
          status: user.status
        },
        `${process.env.JWT_SECRET}`
      )
      resolve(`${token}`)
    })
  })
}

const User = model("User", userSchema)

module.exports = User
