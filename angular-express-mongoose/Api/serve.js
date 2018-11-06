const express = require("express");
const myUsers = require('./users');
const cors = require('cors');
const app = express();
app.use(cors());
app.options('*', cors());
//
app.use(express.urlencoded()) // middleware Bodyparse
//
//
var errorJson = {
  error: "Not Found",
  description: "This item was not found",
}
var successfullyJson = {
  text: 'users loaded successfully'
}

//Get all users
app.get("/api/users/", async function(req, res) { //OK
  try{var response = await myUsers.getUsers();
  res.status(200).json(response)}catch(response){}
  })

//Get user by dni
app.get("/api/user/dni/:dni", async function(req, res) { //OK
  try{
  var dni = req.params.dni;
  var response = await myUsers.getUserByDni(dni);
  res.status(200).json(response)}catch(response){}
  })

//Get user by email
app.get("/api/user/email/:email", async function(req, res) { //OK
  try{
  var email = req.params.email;
  var response = await myUsers.getUserByEmail(email);
  res.status(200).json(response)}catch(response){}
  })

//Remove user by id
app.get("/api/user/remove/:id", function(req, res) { //OK
  var id = req.params.id;
  console.log(id);
  myUsers.removeUsersById(id);
  res.status(200).json(successfullyJson)
  })

//New user
app.post("/api/new/user/", function(req, res){
  var name = req.body.name
  var email = req.body.email
  var dni = req.body.dni
  var select = req.body.select
  var subscribe = req.body.subscribe
  var address = req.body.address
  var postCode = req.body.postCode
  var region = req.body.region
  var subscribe = req.body.subscribe
  var address = req.body.address
  var postCode = req.body.postCode
  var city = req.body.city
  var country = req.body.country
  var observacion = req.body.observacion
  myUsers.newUser(name, email, dni, select, subscribe, address, postCode, region, city, country, observacion)
  res.status(201).json(successfullyJson)
  })

//update user
app.post("/api/update/user/:id", function(req, res){
  var id = req.params.id
  var name = req.body.name
  var email = req.body.email
  var dni = req.body.dni
  var select = req.body.select
  var subscribe = req.body.subscribe
  var address = req.body.address
  var postCode = req.body.postCode
  var region = req.body.region
  var subscribe = req.body.subscribe
  var address = req.body.address
  var postCode = req.body.postCode
  var city = req.body.city
  var country = req.body.country
  var observacion = req.body.observacion
  myUsers.updateUser(id, name, email, dni, select, subscribe, address, postCode, region, city, country, observacion)
  res.status(201).json(successfullyJson)
  })


// activate the listenner
app.listen(3000, function () {
    console.log('Servidor activo en http://localhost:3000');
  })
