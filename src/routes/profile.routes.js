const express = require("express");
const router = express.Router()
const profileController = require("../controllers/profile_controller");


router.get("/profile" , profileController.userprofile )
router.get("/initialise" , profileController.initialiseprofile )

module.exports = router;