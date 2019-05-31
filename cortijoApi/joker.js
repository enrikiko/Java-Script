module.exports={

     switchStatus: (ip, status) => {
       log("IP:", ip)
       log("STATUS:", status)
       request("http://"+ip+"/"+status, (err, res, body) => {
         if (err) {
           return console.log(err);
         }
       });
     }


}
