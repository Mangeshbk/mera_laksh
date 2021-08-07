const {Router} = require('express');

const router = Router();

const Medical = require('../models/Medical.model');

//posting a data
router.post('/',async(req,res)=>{
    const college = await Medical.create(req.body);
    return res.status(201).json({data: college});
})

// getting all colleges from
// router.get('/',async(req,res)=>{
//     const colleges = await Medical.find().lean().exec();
//     return res.status(200).json({data: colleges});
// })
// getting all colleges sorted as per fees
router.get('/',async(req,res)=>{
    console.log(req.query);
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
    // console.log(sort_obj);
    // console.log(filter_obj);
    const colleges = await Medical.find(filter_obj).sort(sort_obj).lean().exec();
    return res.status(200).json({data: colleges});
})

//getting a particular jounrney by type
// router.get('/:stream',async(req,res)=>{
//     let stream = req.params.stream;
//     const journey = await Journey.find({'stream':stream}).lean().exec();
//     return res.status(200).json({data:journey});
// })
// //updating a single student by id
router.patch('/:id',async(req,res)=>{
    const college = await Medical.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(203).json({data:college});
})
// //deleting a singel student by id
router.delete('/:id',async(req,res)=>{
    const college = await Medical.findByIdAndDelete(req.params.id);
    return res.status(200).json({data:college});
})
module.exports = router;