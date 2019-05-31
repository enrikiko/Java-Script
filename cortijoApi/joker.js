const request = require('request');

module.exports={

     switchStatus: (ip, status) => {
       console.log("IP:", ip)
       console.log("STATUS:", status)
       console.log("http://"+ip+"/"+status);
       request("http://"+ip+"/"+status, (err, res, body) => {
         if (err) {
           return console.log(err);
         }
       });
     },
    readLog: () => {
        return fs.readFileSync("log.txt", {encoding: 'ASCII'})
     },
    execute: (msg) => {
       console.log(msg)
       exec(msg, (err, stdout) => {
         if (err) {
           console.log(err)
         }
         if (stdout) {
           console.log(stdout);
         }
       });
     },


}
