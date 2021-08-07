const {Router} = require('express');

const router = Router();

const ArtCollege = require('../models/artCollege.model');

router.post('/',async(req,res)=>{
    const artCollege = await ArtCollege.create(req.body);
    return res.status(201).json({data: artCollege});
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
        const artCollege = await ArtCollege.find(filter_obj).sort(sort_obj).lean().exec();
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