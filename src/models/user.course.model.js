const mongoose = require("mongoose")
const userCoursesSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    courses: [
        {
            course_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Courses",
                required: true
            },
            purchased_at: {
                type: Date,
                default: Date.now,
                required: true,
            },  
            expiryDate: {
                type: Date,
            },
            accessType: {
                type: String,
                enum: ["lifetime", "subscription"],
                default: "lifetime",
            }
        }
    ],
    last_opened_course: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Course",

    }
}, {timestamps:true});

const userCourseModel = mongoose.model("userCourses" , userCoursesSchema);
module.exports = userCourseModel