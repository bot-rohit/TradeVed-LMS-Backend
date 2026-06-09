const mongoose = require('mongoose')
const coursesDetailsSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        require: true,
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courses",
        require: true,
    },
    enrolmentStatus: {
        type: String,
        enum: ["active", "completed", "dropped"],
        default: "active",
    },

    progress: {
        type: Number,
        default: 0
    },

    currentLesson: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson"
    },

    completedLessons: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson"
    }],

})
const courseProgressModel = mongoose.model("courseprogress" , coursesDetailsSchema);
module.exports = courseProgressModel


