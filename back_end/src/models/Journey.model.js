const mongoose = require('mongoose');

const journeySchema = new mongoose.Schema(
    {
        stream: {type:String,required:true},
        journey:{
            immediate: {type:String,required:true},
            immediate_description: {type:String,required:true},
            after:{type:String,required:true},
            after_description: {type: String,required:true},
        },
       
    },{
        versionKey: false,
        timestamps: true,
    }
)
module.exports = mongoose.model('journey', journeySchema);