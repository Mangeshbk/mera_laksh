require("dotenv").config();
const express = require("express");
const connect = require("./src/config/db.js");

const app = express();


const PORT = process.env.PORT || 8080;

app.listen(PORT, async()=>{
    try {
        await connect();
        console.log("server running on 8080");   
    } catch (error) {
        console.log(error.message);
    }
});