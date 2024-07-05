const mongoose = require('mongoose');
require('dotenv').config();

// define the MongoDB connection url
// const mongoURL = 'mongodb://localhost:27017/school';
const mongoURL = process.env.MONGODB_URL_LOCAL;

//for mongodb atlas
// const mongoURL = process.env.MONGODB_URL;

//establish coneection
mongoose.connect(mongoURL) 

// get the default connection
//Mongoose maintains a default object representing the MongoDB connection
const db = mongoose.connection;

// define event listeners for database connection
db.on('connected', () => {
    console.log("Connected to MongoDB Server");
})
db.on('error', (err) => {
    console.log("MongoDB Connection Error", err);
})
db.on('disconnected', () => {
    console.log("MongoDB Disconnected");
});

// Export the database connection
module.exports = db;