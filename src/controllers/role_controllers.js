const userModel = require("../models/user.model");
const mongoose = require("mongoose");


async function roleShifttocreator(req, res) {
    const userdetail = await userModel.findOne({
        _id: req.user.id
    })
    userdetail.role = "creator";
    await userdetail.save();

    res.status(200).json({
        "message": "role changed successfully"

    })

}
module.exports = { roleShifttocreator }