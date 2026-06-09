const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth_controllers");


router.post("/register" ,authController.registerUser )
router.post("/login", authController.loginUser)



module.exports = router;

// router.get("/cookie" , ( req, res)=>{
//    res.json({
//     cookies:req.cookies,
//    })

// })