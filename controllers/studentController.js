const studentMOdel = require("../models/studentModel");
const studentModel = require("../models/studentModel")

exports.createStudent= async(req, res)=>{
    try {
     const profile = {
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    phoneNUmber:req.body.phoneNumber,
    passWord:req.body.passWord
    };

    const checkEmail=await studentModel.findOne({email:req.body.email})

    const checkNUmber = await studentModel.findOne({phoneNUmber:req.body.phoneNumber})

 
    if (checkEmail || checkNUmber) {
       return res.status(400).json({
            message:'Email or Phone Number already exists'
        });

    }
 const createdStudent = await studentModel.create(profile);

    

    res.status(201).json({
        message:"Student Successfully Created",
        data:createdStudent
    })



    } catch (error) {
        res.status(500).json({
            message:"something went wrong",
            error:error.message
        })
    }
}



exports.getAllStudents= async(req, res)=>{
    try {
        const students = await studentModel.find().populate("course");
        res.status(200).json({
            message:"Students retrieved successfully",
            data:students
        });
    } catch (error) {
        res.status(500).json({
            message:"something went wrong",
            error:error.message
        })
    };
};


exports.getOneStudent = async(req, res)=>{
    try {
        const id = req.params.studentId
        const student =await studentMOdel.findById(id).populate("course")
        if(!student){
            res.status(404).json({
                message:'Student not found'
            })
        }res.status(200).json({
            message:"student's Info Successfully retrieved",
            data:student
        })

    } catch (error) {
           res.status(500).json({
            message:"something Just happened wrong",
            error:error.message
        })
    }
}