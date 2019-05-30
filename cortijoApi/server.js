const { exec } = require('child_process');
const request = require('request');
const express = require("express");
const myDevice = require('./users');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser')
const app = express();
app.enable('trust proxy')
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());
//app.use(express.urlencoded()) // middleware Bodyparse
var http = require('http').Server(app);
var io = require('socket.io')(http);

function switchStatus(ip, status) {
  request("http://"+ip+"/status/"+status, (err, res, body) => {
  if (err) { return console.log(err); }
  log(res);
  log(body.url);
  log(body.explanation);
});
  log("IP:", ip)
  log("STATUS:", status)
}

function log(text) {
  io.emit('chat message', text);
  console.log(text);
  text=Date()+"\n"+text+"\n\n"
  fs.appendFile("log.txt", text, function(err) {
     if(err) {
         console.log(err);
        }
 });
}
//
function readLog() {
   return fs.readFileSync("log.txt", {encoding: 'ASCII'})
}
//
var errorJson = {
  error: "Not Found",
  description: "This device was not found",
}
var successfullyJson = {
  text: 'users loaded successfully'
}

function execute(msg) {
  log(msg)
  exec(msg, (err, stdout) => {
    if (err) {
      log(err)
    }
    if (stdout) {
      log(stdout);
    }
  });
}

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    //execute(msg);
  });
});

//Get log
app.get("/device/log", function(req, res) { //OK
  log("--- Log Sent ---")
  try{
    var response = readLog();
    res.status(200).send(response)
  }catch(response){}
  })

app.post("/*", function(req, res) { //OK
  log(req.get('host')+req.originalUrl)
  log(req.protocol)
  log(JSON.stringify(req.body))
  log(req.ip)
  res.status(200).send('ok')
  })

app.get('/terminal', function(req, res){
  res.sendFile(__dirname + '/terminal.html');
});

//Get all device
app.get("/device/all", async function(req, res) { //OK
  log("--- Display all device ---")
  try{
    var response = await myDevice.getDevice();
    res.status(200).json(response)
  }catch(response){}
  })

//Get device by name
app.get("/device/name/:name", async function(req, res) { //OK
  try{
    var name = req.params.name;
    log("Get "+name+" info");
    var response = await myDevice.getDeviceByName(name);
    res.status(200).json(response)
  }catch(response){}
  })

//Remove user by id
app.get("/device/remove/:name", async function(req, res) { //OK
  try{
    var name = req.params.name;
    log("Try to remove "+name+" device");
    var id = await myDevice.getIdbyName(name)
    if (id){
      var response = await myDevice.removeDeviceByName(name);
      log(name+" Remove successfully");
      res.status(200).json("Device Remove successfully")
    }else {
      log(name+" Doesn't Exist");
      res.status(200).json("Device Doesn't Exist")
    }
  }catch(response){}
  })

//New device
app.get("/device/new/:name/:status/:description", async function(req, res){
  try{
    var name = req.params.name
    var status = req.params.status
    var description = req.params.description
    log("Try to create a new device: name-"+name+" status-"+status+" description-"+description);
    var id = await myDevice.getIdbyName(name)
    if (!id) {
      var response = await myDevice.newDevice(name, status, description)
      log(name+' create successfully');
      res.status(201).json(name+' create successfully')
    }else {
      log(name+' already exist');
      res.status(200).json(name+' already exist')
    }
  }catch(response){}
  })

//update user
app.get("/device/update/:name/:status", async function(req, res){
  try{

    var name = req.params.name
    var status = req.params.status

    log("Change status of "+name+" to "+status);
    var id = await myDevice.getIdbyName(name)
    var ip = await myDevice.getIpbyName(name)
    var lastStatus = await myDevice.updateDevice(id, status)
    var newStatus = await myDevice.getDeviceById(id)
    log("Previous Status:"+lastStatus+ " New Status:"+newStatus)
    switchStatus(ip, newStatus)
    res.status(200).json({"Previous Status": lastStatus, "New Status": newStatus})
  }catch(response){}
  })
app.get('/*', function(req, res){
  res.sendFile(__dirname + '/info.html');
});
// activate the listenner
http.listen(3000, function () {
    log('Servidor activo en http://localhost:3000');
  })
