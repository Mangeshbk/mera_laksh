const mongoose = require('mongoose');

const medicalSchema = new mongoose.Schema(
    {
        Name:{type:String,required:true},
        Ratings:{type:Number,required:true},
        Hostel:{type:Boolean,required:true},
        Branches_Available:[{type:String}],
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
module.exports = mongoose.model('medical', medicalSchema);

// {
//     Name:{type:String,required:true},
//     Ratings:{type:Number,required:true},
//     Hostel:{type:Boolean,required:true},
//     Science:{type:Boolean,required:true},//true/false
//     Commerce:{type:Boolean,required:true},//false/true
//     Arts:{type:Boolean,required:true}//true/false
//     CutOff:{type:Number,required:true},
//     Fees:{type:Number,required:true},
//     Url:{type:String,required:true},  
//     City:{type:String,required:true},
//     State:{type:String,required:true},
// }
// commerce ?