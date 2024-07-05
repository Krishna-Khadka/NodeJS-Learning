var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);
console.log(user.homedir);

// create file
fs.appendFile('hello.txt', "Hello World" + user.username, () => {
    console.log("file is created");
})

console.log(fs);