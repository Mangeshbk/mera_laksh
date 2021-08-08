// // require("dotenv").config();
const app = require("./index");
const connect = require("./config/db.js");


const PORT = process.env.PORT || 8080;

app.listen(PORT, async()=>{
    try {
        await connect();
        console.log("server running on 8080");   
    } catch (error) {
        console.log("test")
        console.log(error.message);
    }
});