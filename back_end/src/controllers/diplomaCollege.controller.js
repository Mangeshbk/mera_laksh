const {Router} = require('express');

const router = Router();

const DiplomaCollege = require('../models/diploma.model');

router.post('/',async(req,res)=>{
    const diplomaCollege = await DiplomaCollege.create(req.body);
    return res.status(201).json({data: diplomaCollege});
})


router.get('/',async(req,res)=>{
    let sort_obj = {};
    let filter_obj = {};
//    console.log(req.query);
    
    for(keys in req.query){
        let key_arr = keys.split('_');
//        console.log(key_arr);
        if(key_arr[0]=="filter"){
            filter_obj[key_arr[1]] = req.query[keys];
        }else{
            sort_obj[keys] = +req.query[keys]
        }
    }
//    console.log(filter_obj)

    try{
        const diplomaCollege = await DiplomaCollege.find(filter_obj).sort(sort_obj).lean().exec();
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