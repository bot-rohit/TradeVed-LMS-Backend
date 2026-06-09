const express = require('express')
const router = express.Router()
const roleController = require('../controllers/role_controllers')

router.patch("/creator" , roleController.roleShifttocreator);

module.exports = router;