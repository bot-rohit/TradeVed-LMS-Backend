const mongoose = require("mongoose")
const { type } = require("node:os")
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,

    },      
    lastName: {
        type: String,
        required: true,
    } ,
    email: {
        type: String,
        unique: true,
        required:true,

    },
    password:{
        type:String, 
        required:true,
    },
    role:{
        type:String,
        enum : ["creator" , "user" , "admin" , "superAdmin"],
        default:"user",
    },
      creatorStatus: {
        type: String,
        enum: ["none", "pending", "approved", "rejected"],
        default: "none"
    }


})
const userModel = mongoose.model("users", UserSchema)
module.exports = userModel