const scoreModel = require("../models/scoreModel");

const studentModel = require("../models/studentModel");

exports.createScore = async(req,res)=>{
    try {
       const studentId = req.params.id;

        const checkStudent = await studentModel.findById(studentId)
        if(!checkStudent){
            return res.status(404).json({
                message:"Student not found"
            })
        }
        const score = {
            cA:req.body.cA,
            exam:req.body.exam
        }
     const createdScore = new scoreModel(score);

    createdScore.student = studentId;

    checkStudent.score.push(createdScore._id);

        await createdScore.save()
        await checkStudent.save()

        res.status(201).json({
            message:"Score created successfully",
            data:createdScore
        })
    } catch (error) {
        res.status(500).json({
            message:"Error creating score",
            error:error.message
        })
    };
};

exports.getAllScores = async(req,res)=>{
    try {
        const scores = await scoreModel.find().populate("student").populate("course")
        
        
        res.status(200).json({
            message:"Scores retrieved successfully",
            data:scores
        })
    } catch (error) {
        res.status(500).json({
            message:"Error retrieving scores",
            error:error.message
        })
    };
};  


exports.getOneScore = async(req,res)=>{
    try {
        const id = req.params.scoreId   
        const score = await studentModel.findById(id).populate("student").populate("course")
        if(!score){
            return res.status(404).json({
                message:"Score not found"
            })
        }
        res.status(200).json({
            message:"Score retrieved successfully",
            data:score
        })
    } catch (error) { 
        res.status(500).json({
            message:"Error retrieving score",
            error:error.message
        })
    }
};      