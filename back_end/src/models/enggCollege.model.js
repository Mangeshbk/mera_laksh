const mongoose = require('mongoose');

const enggCollegeSchema = new mongoose.Schema(
    {
        Name:{type:String,required:true},
        Ratings:{type:Number,required:true,enums:[1,2,3,4,5]},
        Hostel:{type:Boolean,required:true},
        Branches_Available:[{type:String,required:true}],
        CutOff:{type:Number,required:true},
        Fees:{type:Number,required:true},
        Url:{type:String,required:true},
        City:{type:String,required:true},
        State:{type:String,required:true},
    },{
        versionKey: false,
        timestamps: true,
    }
)
module.exports = mongoose.model('EnggCollege', enggCollegeSchema);