const { createStudent, getAllStudents, getOneStudent } = require("../controllers/studentController")

const router = require("express").Router()

router.post("/student",createStudent)

router.get("/student",getAllStudents)

router.get("/student/:studentId",getOneStudent)

module.exports = router;