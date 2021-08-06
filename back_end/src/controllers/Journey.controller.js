const {Router} = require('express');

const router = Router();

const Journey = require('../models/Journey.model');

//posting a data
router.post('/',async(req,res)=>{
    const journey = await Journey.create(req.body);
    return res.status(201).json({data: journey});
})

//getting all students from
// router.get('/',async(req,res)=>{
//     const students = await Student.find().lean().exec();
//     return res.status(200).json({data: students});
// })

//getting a particular jounrney by type
router.get('/:stream',async(req,res)=>{
    let stream = req.params.stream;
    const journey = await Journey.find({'stream':stream}).lean().exec();
    return res.status(200).json({data:journey});
})
// //updating a single student by id
// router.patch('/:id',async(req,res)=>{
//     const student = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true});
//     return res.status(203).json({data:student});
// })
// //deleting a singel student by id
router.delete('/:id',async(req,res)=>{
    const student = await Journey.findByIdAndDelete(req.params.id);
    return res.status(200).json({data:student});
})
module.exports = router;