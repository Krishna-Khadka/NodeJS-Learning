const main = require('./db.js');
var _ = require('lodash');

var data = ["new", "old", "hello", "new", "old"];


var output = main.sub(4, 4)
console.log(output);

console.log(main.db_name);
console.log("this is main file");

var filterUniqueData = _.uniq(data);
console.log(filterUniqueData);
console.log(_.isString(0));