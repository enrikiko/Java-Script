const express = require("express");
const myDevice = require('./users');
const cors = require('cors');
const fs = require('fs');
var io = require('socket.io');
const app = express();
app.use(cors());
app.options('*', cors());
app.use(express.urlencoded()) // middleware Bodyparse
//
function log(text) {
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
function functionName() {
  io.emit('chat message', 'Hello World');
}
//Get log
app.get("/device/log", function(req, res) { //OK
  log("--- Log Sent ---")
  functionName()
  try{
    var response = readLog();
    res.status(200).send(response)
  }catch(response){}
  })

app.get('/log', function(req, res){
  res.sendFile(__dirname + '/index.html');
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
    var lastStatus = await myDevice.updateDevice(id, status)
    var newStatus = await myDevice.getDeviceById(id)
    log("Previous Status:"+lastStatus+ " New Status:"+newStatus)
    res.status(200).json({"Previous Status": lastStatus, "New Status": newStatus})
  }catch(response){}
  })

// activate the listenner
app.listen(3000, function () {
    log('Servidor activo en http://localhost:3000');
  })
