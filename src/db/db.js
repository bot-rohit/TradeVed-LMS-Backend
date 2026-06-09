const mongoose = require("mongoose");
const dns = require("dns");
require("dotenv").config()
dns.setServers([
    '1.1.1.1',
    '8.8.8.1'
]);
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI_LINK)
        console.log("connected to database")

    }
    catch(err){
        console.log("connection failed")

    }
}
module.exports= connectDB