const express = require("express");
//const myDevice = require('./users');
//const cors = require('cors');
const fs = require('fs');
//const bodyParser = require('body-parser')
const app = express();
app.enable('trust proxy')
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());
app.use(express.urlencoded()) // middleware Bodyparse
var http = require('http').Server(app);
//var io = require('socket.io')(http);
//const { exec } = require('child_process');

app.post("/*", function(req, res, next) { //OK
  var request={}
  request.url=req.get('host')+req.originalUrl
  request.body=JSON.stringify(req.body)
  request.ip=req.ip
  request.header=req.header
  console.log(request);
  req.info=request
  next()
  })
app.post('/*', function(req, res){
  res.status(200).json(req.info)
});


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

app.get('/*', function(req, res){
  res.status(200).json(req.info)
});

http.listen(3000, function () {
    console.log('Servidor activo en http://localhost:3000');
  })
