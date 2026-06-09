const mongoose = require("mongoose");
const coursetype = new mongoose.Schema({
    course_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"courses",
        required:true,
    },
    course_type:{
        type:String,
        enum:["a" , "b" , "c"],
        default:"a",
    },
    duration:{
        type:Number,
        required:true,

    },
    unlock_mode:{
        type:String,
        enum:["a" , "b" , "c"],
        default:"a",
    },
    daily_xp:{
        type:Number,
        required:true,
    }
 
})
const courseTypeModel= mongoose.model("coursetype" , coursetype);
module.exports = courseTypeModel;