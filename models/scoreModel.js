const mongoose = require("mongoose");

const scoreSchema = mongoose.Schema({
    student:[{type:mongoose.Schema.Types.ObjectId,ref:"studentInfo"}],
    course:[{type:mongoose.Schema.Types.ObjectId,ref:"courseInfo"}],
    cA:{type:Number,required:true,max:30,min:0},
    exam:{type:Number,required:true,max:70,min:0},
    total:{type:Number,default:0}
})

//calculate total score before saving 
scoreSchema.pre("save",function(next){
this.total = this.cA + this.exam
next;
})

const scoreModel = mongoose.model("scoreInfo",scoreSchema);

module.exports = scoreModel;