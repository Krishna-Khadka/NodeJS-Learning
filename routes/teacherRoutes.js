const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');
const { findByIdAndDelete } = require('../models/Course');

router.post('/', async (req, res) => {

    /*
  
      const data = req.body //Assuming the request body contains the teacher data
  
      //Create a new Teacher docuent using the Mongoose model
      const newTeacher = new Teacher(data);
      // newTeacher.name = data.name;
      // newTeacher.age = data.age;
      // newTeacher.designation = data.designation;
      // newTeacher.phone = data.phone;
      // newTeacher.email = data.email;
      // newTeacher.address = data.address;
  
      // save the new teacher to the database
      newTeacher.save((error, savedTeacher) => {
          if (error) {
              console.log('Error saving teacher', error);
              res.status(500).json({ error: 'Internal server error' })
          } else {
              console.log('Data saved successfully');
              res.status(200).json(savedTeacher);
          }
      })
      */

    try {
        const data = req.body;
        const newTeacher = new Teacher(data);
        const savedTeacher = await newTeacher.save();
        console.log('data saved');
        res.status(200).json(savedTeacher)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// get method to get the teachers data
router.get('/', async (req, res) => {
    try {
        const data = await Teacher.find();
        console.log('Teachers data fetched Successfully');
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// parameterized url
router.get('/:designationType', async (req, res) => {
    const designationType = req.params.designationType; //exact designation from the URL parameter
    try {
        if (designationType == "Principal" || designationType == "Coordinator" || designationType == "Lecturer") {
            const response = await Teacher.find({ designation: designationType });
            console.log("response fetched");
            res.status(200).json(response);
        } else {
            console.log(error);
            res.status(500).json({ error: 'Invalid Work Type' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// update teachers data
router.put('/:id', async (req, res) => {
    try {
        const teacherId = req.params.id; //Extact the id from the URL parameter
        const updatedTeacherData = req.body; //Update data for the teacher

        const response = await Teacher.findByIdAndUpdate(teacherId, updatedTeacherData, {
            new: true, //Return the updated document
            runValidators: true //Run mongoose validation
        })

        if (!response) {
            return res.status(404).json({ error: 'Teacher not found' });
        }

        console.log("data updated");
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

//delete teachers data
router.delete('/:id', async (req, res) => {
    try {
        const teacherId = req.params.id; //Extact the same id from the URL parameter
        const response = await Teacher.findByIdAndDelete(teacherId);

        if (!response) {
            return res.status(404).json({ error: 'Teacher not found' });
        }

        console.log("data deleted");
        res.status(200).json({ message: "Data deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router;