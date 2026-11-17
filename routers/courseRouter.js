const { createCourse, getAllcourses, getOneCourse } = require("../controllers/courseController");


const router = require("express").Router()

router.post("/course/:id",createCourse)

router.get("/course",getAllcourses)

router.get("/course/:courseId",getOneCourse)

module.exports= router;