const request = require('request');
const fs = require('fs');

module.exports={

     switchStatus: async (ip, status) => {
       console.log("IP:", ip)
       console.log("STATUS:", status)
       console.log("http://"+ip+"/"+status);
       function sendRes(val) {
         return val;
       }
       await request("http://"+ip+"/"+status, (err, res, body) => {
          if (err) {
             sendRes(err);
           } else if(res){
             sendRes(res.body)
           }
         }
       );
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
    log: (text) => {
       //io.emit('chat message', text);
       console.log(text);
       text=Date()+"\n"+text+"\n\n"
       fs.appendFile("log.txt", text, function(err) {
          if(err) {
              console.log(err);
             }
      });
    },
    getStatus: (status) => {
      var status;
      if (status == "on"){ status = true}
      else if (status == "off"){status = false}
      else{ status = null }
      return status;
    }



}
