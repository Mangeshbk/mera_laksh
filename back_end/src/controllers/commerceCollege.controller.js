const {Router} = require('express');

const router = Router();

const CommerceCollege = require('../models/commerceCollege.model');

router.post('/',async(req,res)=>{
    const commerceCollege = await CommerceCollege.create(req.body);
    return res.status(201).json({data: commerceCollege});
})


router.get('/',async(req,res)=>{
    let sort_obj = {};
    let filter_obj = {};
    
    for(keys in req.query){
        let key_arr = keys.split('_');
//        console.log(key_arr);
        if(key_arr[0]=="filter"){
            filter_obj[key_arr[1]] = req.query[keys];
        }else{
            sort_obj[keys] = +req.query[keys]
        }
    }

    try{
        const commerceCollege = await CommerceCollege.find(filter_obj).sort(sort_obj).lean().exec();
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