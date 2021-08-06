require("dotenv").config();
const mongoose = require("mongoose");
const connect = ()=>{
    return mongoose.connect(process.env.CONNECT,
        {useNewUrlParser: true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology: true 
    })
}

module.exports = connect;