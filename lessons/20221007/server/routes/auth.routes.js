// CRUD - create, read, update, delete

const express = require("express")
const router = express.Router()
const authController = require("../controllers/auth.controller")
const jwt = require("jsonwebtoken")
const { body } = require("express-validator")

// middleware that is specific to this router
const protectedMiddleware = (req, res, next) => {
  if (req.headers["authorization"]) {
    const token = req.headers.authorization.split(" ")[1]
    jwt.verify(token, `${process.env.JWT_SECRET}`, (err, decoded) => {
      if (err) return res.send(err)
      req.user = {
        name: decoded.name,
        email: decoded.email,
        status: decoded.status
      }
      next()
    })
  }
}

router.post(
  "/signup",
  body("name").not().isEmpty().trim().escape(),
  body("email").isEmail().normalizeEmail(),
  body("password").isLength({ min: 4 }),
  authController.signup
)
router.post(
  "/login",
  body("name").not().isEmpty().trim().escape(),
  body("email").isEmail().normalizeEmail(),
  body("password").isLength({ min: 4 }),
  authController.login
)
router.get("/protectedRoute", protectedMiddleware, authController.protected)

module.exports = router
