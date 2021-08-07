const {Router} = require('express');

const router = Router();

const CommerceCollege = require('../models/commerceCollege.model');

router.post('/',async(req,res)=>{
    const commerceCollege = await CommerceCollege.create(req.body);
    return res.status(201).json({data: commerceCollege});
})


router.get('/',async(req,res)=>{
    try{
        const commerceCollege = await CommerceCollege.find().lean().exec();
        return res.status(200).json({data:commerceCollege});
    }catch(err){
        console.log(err.message)
    }
});

router.delete('/:id',async(req,res)=>{
    const deletedCollege = await CommerceCollege.findByIdAndDelete(req.params.id);
    return res.status(200).json({data:deletedCollege});
})
module.exports = router;