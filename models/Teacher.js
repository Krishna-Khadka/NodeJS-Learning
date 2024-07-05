const mongoose = require('mongoose');


const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    designation: {
        type: String,
        enum: ["Principal", "Coordinator", "Lecturer"],
        required: true
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;