// const EventEmitter = require('events');
const Logger = require('./logger');
const logger = new Logger;
logger.on("messageLogged",(arg)=>{console.log('Something happen', arg);})
logger.log("message")
