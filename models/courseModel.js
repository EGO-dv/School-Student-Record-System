const mongoose = require("mongoose")

// course data structure
const courseSchema = mongoose.Schema({
    courseTitle:{type:String,rquired:true},
    courseCode:{type:String,required:true},
    description:{type:String},
    students:[{type:mongoose.Schema.Types.ObjectId,
        ref:"studentInfo"
    }]
})

const courseModel = mongoose.model("courseInfo",courseSchema)

module.exports = courseModel;