const {Router} = require('express');

const router = Router();

const IntermediateCollege = require('../models/intermediate.model');

router.post('/',async(req,res)=>{
    const intermediateCollege = await IntermediateCollege.create(req.body);
    return res.status(201).json({data: intermediateCollege});
})


router.get('/',async(req,res)=>{
//    console.log(req.query);
    const intermediateCollege = await IntermediateCollege.find().lean().exec();
    return res.status(200).json({data:intermediateCollege});
});

router.delete('/:id',async(req,res)=>{
    const deletedCollege = await IntermediateCollege.findByIdAndDelete(req.params.id);
    return res.status(200).json({data:deletedCollege});
})
module.exports = router;