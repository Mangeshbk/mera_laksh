const {Router} = require('express');

const router = Router();

const EnggCollege = require('../models/enggCollege.model');

router.post('/',async(req,res)=>{
    const enggCollege = await EnggCollege.create(req.body);
    return res.status(201).json({data: enggCollege});
})


router.get('/',async(req,res)=>{
//    console.log(req.query);
    let sort_obj = {};
    let filter_obj = {};
    
    for(keys in req.query){
        let key_arr = keys.split('_');
        console.log(key_arr);
        if(key_arr[0]=="filter"){
            filter_obj[key_arr[1]] = req.query[keys];
        }else{
            sort_obj[keys] = +req.query[keys]
        }
    }

    const college = await EnggCollege.find(filter_obj).sort(sort_obj).lean().exec();
    return res.status(200).json({data:college});
});

router.delete('/:id',async(req,res)=>{
    const deletedCollege = await EnggCollege.findByIdAndDelete(req.params.id);
    return res.status(200).json({data:deletedCollege});
})
module.exports = router;