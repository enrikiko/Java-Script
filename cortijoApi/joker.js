module.exports={

     switchStatus: (ip, status) => {
       log("IP:", ip)
       log("STATUS:", status)
       request("http://"+ip+"/status/"+status, (err, res, body) => {
         if (err) {
           return console.log(err);
         }
       });
     }

     
}
