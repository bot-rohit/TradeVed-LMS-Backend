const mongoose = require("mongoose")

const Modules = new mongoose.Schema({
    course_id={
        type: mongoose.Schema.Types.ObjectId,
        ref: "courses",
        required: true,
    },
    course_type={
        type: mongoose.Schema.Types.ObjectId,
        ref: "coursetype",
        required: true,
    },
    number_module: {
        type: Number,
        required: true,
    },
    modules: [
        {
            type:String,
        }
    ]
})
const course_modules = mongoose.model("all_modules" , Modules);
module.exports = course_modules;