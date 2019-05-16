const express = require("express");
//const myDevice = require('./users');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser')
const app = express();
app.enable('trust proxy')
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());
app.use(express.urlencoded()) // middleware Bodyparse
var http = require('http').Server(app);
var io = require('socket.io')(http);
const { exec } = require('child_process');

app.post("/", function(req, res, next) { //OK
  var request={}
  request.url=req.get('host')+req.originalUrl
  request.body=JSON.stringify(req.body)
  request.ip=req.i
  console.log(JSON.stringify(request));
  })
app.post('/*', function(req, res){
  res.status(200).json(request)
});

app.get("/", function(req, res, next) { //OK
  var request={}
  request.url=req.get('host')+req.originalUrl
  request.body=JSON.stringify(req.body)
  request.ip=req.ip
  console.log(JSON.stringify(request));
  })

app.get('/*', function(req, res){
  res.status(200).json(request)
});

http.listen(3000, function () {
    console.log('Servidor activo en http://localhost:3000');
  })
