const express = require('express')
const app = express()
const db = require('./db')

const bodyParser = require('body-parser');
app.use(bodyParser.json()) //req.body


const Course = require('./models/Course.js')
const PORT = 3000

app.get('/', function (req, res) {
    res.send(`Server is running at port ${PORT}`);
})

// import the router files
const teacherRoutes = require('./routes/teacherRoutes.js');
const courseRoutes = require('./routes/courseRoutes.js');

//use the routers
app.use('/teacher', teacherRoutes);
app.use('/course', courseRoutes);







app.get('/about', function (req, res) {
    const company = {
        name: "Fusion Tech",
        address: "Khorsane",
        IsActive: true,
    }
    res.send(company);
})

app.post('/info', (req, res) => {
    res.send("Data inserted Successfully");
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})