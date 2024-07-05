const express = require('express');
const router = express.Router();
const Course = require('../models/Course.js');


//post route for course data

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newCourse = new Course(data);
        const savedCourse = await newCourse.save();
        console.log('course saved');
        res.status(200).json(savedCourse);
    } catch (error) {
        console.log(error);
        res.status(400).json({error: 'Internal Server Error'})
    }
})

//get route for course data

router.get('/', async(req,res) => {
    try {
        const data = await Course.find();
        console.log('COurse Data Fetched Successfully');
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
     
})

module.exports = router