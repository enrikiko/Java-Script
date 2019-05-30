const express = require("express");
const cors = require('cors');
const app = express();
app.enable('trust proxy')
app.use(express.urlencoded()) // middleware Bodyparse
var http = require('http').Server(app);


app.get("/*", function(req, res, next) {
  var request={}
  request.url=req.get('host')+req.originalUrl
  request.body=JSON.stringify(req.body)
  request.ip=req.ip
  request.header=req.header
  console.log(request);
  req.info=request
  next()
  })

app.get('/status/:status', function(req, res){
  info={}
  info.status=req.params.status
  res.status(200).json(info)
});

http.listen(3000, function () {
    console.log('Servidor activo en http://localhost:3000');
  })