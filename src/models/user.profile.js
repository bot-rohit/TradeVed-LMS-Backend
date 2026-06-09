const mongoose = require('mongoose')
const UserProfile = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    level: {
        type: Number,
        default: 1,
    },
    xp: {
        type: Number,
        default: 0,
    },
    streak: {
        type: Number,
        default: 1,
    },
    badge: [{
        type: String,
    }],
    rank:{
        type:Number,
    }
})
const profileModel = mongoose.model("profile" , UserProfile)
module.exports = profileModel
