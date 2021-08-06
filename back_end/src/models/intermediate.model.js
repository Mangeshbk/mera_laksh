const mongoose = require('mongoose');

const intermediateCollegeSchema = new mongoose.Schema(
    {
        Name:{type:String,required:true},
        Ratings:{type:Number,required:true},
        Hostel:{type:Boolean,required:true},
        Science:{type:Boolean},
        Art:{type:Boolean},
        Commerce:{type:Boolean},
        Bio:{type:Boolean},
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

module.exports = mongoose.model('IntermediateCollege', intermediateCollegeSchema);