console.log("Database is running");

let db_name = "mongoose";

const sub = function(a,b) {
    return a+b;
} 

module.exports = {
    db_name,
    sub
}
