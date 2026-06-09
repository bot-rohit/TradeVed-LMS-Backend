const profileModel = require("../models/user.profile")
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")


async function userprofile(req, res) {

    res.status(200).json({
        message: "success",
    })

}

async function initialiseprofile(req, res) {
   
// req.user.id === decoded.id  ///call it like this only
    const profileExist = await profileModel.findOne({
        user_id:req.user.id
    })
    if (profileExist) {
        return res.status(401).json({ message: "profile already exist" })
    }

    const profile = await profileModel.create({
        user_id:req.user.id
    })
    res.status(200).json({
        message:"success",
        profile
    })
}

module.exports = { userprofile , initialiseprofile };