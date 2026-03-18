const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("dotenv").config()

const authRoutes = require("./routes/authRoutes")

const app = express()

app.use(express.json())
app.use(cookieParser())

// CORS MUST come before routes
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

// Routes after middleware
app.use("/api/auth", authRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))

app.listen(5000, ()=>{
  console.log("Server running on port 5000")
})