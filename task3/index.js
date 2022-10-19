// const fs = require("fs");
// fs.appendFile("welcomeNode.txt", "Hello Node!");

// const fs = require('fs');
// fs.appendFile("hello.txt", "Hello file!");
// fs.readFile('./hello.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });


var fs = require('fs');

fs.appendFile('welcome.txt', 'Hello NODE!!!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});


fs.appendFile('hello.txt', 'Hello file!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

fs.readFile('./hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});