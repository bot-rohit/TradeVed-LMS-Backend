const express = require("express")
const jwt = require("jsonwebtoken")

async function verifytoken(req, res, next) {
    const token = req.cookies.signupcookie;
    if (!token) {
        return res.status(401).json({ message: "unauthorised , no token" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Unauthorised, wrong token" })
    }

}
module.exports = verifytoken;

// The below is the data of the decoded 
// {
//     id: "685f3c8e7a4d...",
//     iat: 1749200000
// }

