const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    creatorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    subtitle:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    categories:{
        type:Stirng ,
        enum :["nifty" , "sensex"],
        default:"nifty,"
    },
    difficulty:{
        type:String,
        enum:["easy" , "medium" , "hard"],
        default:"easy",
    }


})
const courseModel = mongoose.model("courses" , courseSchema);
module.exports = courseModel;
