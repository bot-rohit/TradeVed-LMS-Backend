const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const { default: mongoose } = require("mongoose");


async function registerUser(req, res) {
    const { firstName, lastName, email, password } = req.body;
    const isAlreadyexist = await userModel.findOne({
        email: email,
    })
    if (isAlreadyexist) {
        return res.status(409).json({ message: "user already exist" })
    }
    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const hash = await bcrypt.hash(req.body.password, 10)

    const user = await userModel.create({
        firstName, lastName, email, password: hash,

    })
    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)


    res.cookie("signupcookie", token)
    res.status(200).json({
        output: "successful",
        user,
        token
    })
}

// async function reset( req , res){
//     const email

// }

async function loginUser(req, res) {
    const { email, password } = req.body;
    const isExist = await userModel.findOne({
        email: email

    })
    if (!isExist) {
        return res.status(401).json({ message: "not registered" })

    }
    const pass = await bcrypt.compare(password, isExist.password)
    if (!pass) {
        return res.status(409).json({ message: "invalid password " })
    }
    const token = jwt.sign({
        id: isExist._id,
        email: isExist.email,
    }, process.env.JWT_SECRET)
    res.clearCookie("signupcookie");

    res.cookie("loginCookie", token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
        message: "success",
        isExist,
        token
    })



}
module.exports = { registerUser, loginUser };