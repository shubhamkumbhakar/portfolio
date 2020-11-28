const express = require('express');

const router = express.Router();

const DataPost = require('../models/dataPost');


router.get('/',(req,res)=>{
    DataPost.find({})
        .then((data)=>{
                res.json(data)
        })
        .catch((error)=>{
            console.log('Error');
        })
    
})


router.post('/save', (req,res)=>{
    const data = req.body;
    const newDataPost = new DataPost(data);
    newDataPost.save((error)=>{
        if(error){
            res.status(500).json({msg: 'Internal Server Error'});
            return;
        }
        return res.json({
                msg: 'Received Data!'
        })
        
    })

    
})



module.exports = router;