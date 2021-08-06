const {Router} = require('express');

const router = Router();

const ArtCollege = require('../models/artCollege.model');

router.post('/',async(req,res)=>{
    const artCollege = await ArtCollege.create(req.body);
    return res.status(201).json({data: artCollege});
})


router.get('/',async(req,res)=>{
    try{
        const artCollege = await ArtCollege.find().lean().exec();
        return res.status(200).json({data:artCollege});
    }catch(err){
        console.log(err.message)
    }
});

router.delete('/:id',async(req,res)=>{
    const deletedCollege = await ArtCollege.findByIdAndDelete(req.params.id);
    return res.status(200).json({data:deletedCollege});
})
module.exports = router;