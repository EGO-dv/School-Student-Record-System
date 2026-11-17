const express = require("express")
const PORT = 2890
const studentRouter = require("./routers/studentRouter")
const courseRouter = require("./routers/courseRouter")
const scoreRouter = require("./routers/scoreRouter")
const app = express()
require("./db")
app.use(express.json())
app.use(studentRouter)
app.use(courseRouter)
app.use(scoreRouter)






app.listen(PORT,()=>{console.log(`my app is running on ${PORT}`)})