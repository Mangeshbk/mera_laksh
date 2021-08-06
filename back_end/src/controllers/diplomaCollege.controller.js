const {Router} = require('express');

const router = Router();

const DiplomaCollege = require('../models/diploma.model');

router.post('/',async(req,res)=>{
    const diplomaCollege = await DiplomaCollege.create(req.body);
    return res.status(201).json({data: diplomaCollege});
})


router.get('/',async(req,res)=>{
    try{
        const diplomaCollege = await DiplomaCollege.find().lean().exec();
        return res.status(200).json({data:diplomaCollege});
    }catch(err){
        console.log(err.message)
    }
});

router.delete('/:id',async(req,res)=>{
    const deletedCollege = await DiplomaCollege.findByIdAndDelete(req.params.id);
    return res.status(200).json({data:deletedCollege});
})
module.exports = router;