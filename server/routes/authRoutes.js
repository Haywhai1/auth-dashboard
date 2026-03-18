const express = require("express")
const router = express.Router()
const User = require("../models/User")
const authMiddleware = require("../middleware/authMiddleware")

const {
  register,
  login,
  logout
} = require("../controllers/authController")

router.post("/register", register)

router.post("/login", login)

router.post("/logout", logout)

router.get("/me", authMiddleware, async (req, res) => {

  const user = await User.findById(req.user.id).select("-password")

  res.json(user)

})

module.exports = router