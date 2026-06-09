const app = require('./src/app')
const connectDB = require('./src/db/db')
connectDB();


app.listen(2001 , ()=>{
    console.log("server is now running")
});