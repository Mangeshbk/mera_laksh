const {Router} = require('express');

const router = Router();

const EnggCollege = require('../models/enggCollege.model');

router.post('/',async(req,res)=>{
    const enggCollege = await EnggCollege.create(req.body);
    return res.status(201).json({data: enggCollege});
})


router.get('/',async(req,res)=>{
    const sortquery = ""
    console.log(req.query);
    const college = await EnggCollege.find().lean().exec();
    return res.status(200).json({data:college});
});

router.delete('/:id',async(req,res)=>{
    const deletedCollege = await EnggCollege.findByIdAndDelete(req.params.id);
    return res.status(200).json({data:deletedCollege});
})
module.exports = router;