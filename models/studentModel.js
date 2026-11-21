const mongoose = require("mongoose");

// student data structure 
const studentSchema = mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    phoneNUmber:{type:String,unique:true},
    passWord:{type:String,required:true},
    course:[{type:mongoose.Schema.Types.ObjectId,
        ref:"courseInfo"
    }],
    score:[{type:mongoose.Schema.Types.ObjectId,
        ref:"scoreInfo"
    }]

});

const studentMOdel= mongoose.model("studentInfo",studentSchema);

module.exports= studentMOdel;


