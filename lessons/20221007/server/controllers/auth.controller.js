const User = require("../models/user.model")
const { validationResult } = require("express-validator")

exports.signup = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  User.signup(req.body)
    .then(data => res.send(`Seems to be done ${data}`))
    .catch(err => res.send(`Failed successfully ${err}`))
}

exports.login = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  User.login(req.body)
    .then(data => res.send(`Seems to be done ${data}`))
    .catch(err => res.send(`Failed successfully ${err}`))
}

exports.protected = async (req, res) => {
  const user = req.user
  res.send(user)
}
