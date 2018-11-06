const EventEmitter = require('events');

var url = "https://us-central1-sim808-gps.cloudfunctions.net/v3/set/value/"

class Logger extends EventEmitter{
   log(text) {
    url = url + text;
    console.log(url);
    this.emit("messageLogged",{url:url})
  }
}

module.exports = Logger;
