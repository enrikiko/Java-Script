node modules:
os
fs
events
http


function sayHello(name = "World"){
  console.log("Hello" + name);
}


setTimeout(()=>{sayHello(module)}, 1000);

console.log(module);

console.log(module.id);

console.log(module.filename);


const logger = require('./logger');
logger.log("hola");


const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);


const os = require('os');
var fm = os.freemem();
var tm = os.totalmem();
console.log(`Free Memory:  ${fm}` );
console.log(`Total Memory: ${tm}` );


const fs = require('fs');
var files = fs.readdirSync("./");
console.log(files);
