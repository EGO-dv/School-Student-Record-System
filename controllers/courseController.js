const courseModel =require("../models/courseModel")
const studentMOdel = require("../models/studentModel")


exports.createCourse = async(req, res)=>{
    try {
        const studentId= req.params.id

        const checkStudent = await studentMOdel.findById(studentId)
        if (!checkStudent) {
            return res.status(404).json({
                message:"Student not found"
            })
        }
        const course = {
    courseTitle:req.body.courseTitle,
    courseCode:req.body.courseCode,
    description:req.body.description
    }

    const createdCourse = new courseModel(course)
    checkStudent.course.push(createdCourse._id);
    createdCourse.student = studentId;

    await checkStudent.save()
    await createdCourse.save()

res.status(201).json({
    message:'Student Successfully Created',
    data:createdCourse
})
    } catch (error) {
        res.status(400).json({
            message:"something went wrong",
            error:error.message
        })
    }
};

exports.getAllcourses = async(req, res)=>{
    try{
        const courses = await courseModel.find().populate("students")
        res.status(200).json({
            message:"Students Successfully Retrieved",
            data:courses
        })

    } catch(error) {
         res.status(400).json({
            message:"something went wrong",
            error:error.message
        })
    }
};

exports.getOneCourse = async(req, res)=>{
    try {
        const id = req.params.courseId
        const checkCourse = await courseModel.findById(id).populate("students")
        if (!checkCourse) {
            res.status(404).json({
                message:"course not found"
            })
        }
        res.status(200).jason({
            message:'course retrieved',
            data:checkCourse
        })

    } catch (error) {
         res.status(400).json({
            message:"something went wrong",
            error:error.message
        })
    }

}