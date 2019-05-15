const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require("express");
const uuidv1 = require('uuid/v1');
// const bodyParser = require('body-parser');
const page = "<h1>HTTP received successfully</h1>"

var app = express();
// var info = express();

// info.use(express.bodyParser());
// info.use( bodyParser.json() );
// info.use(bodyParser.urlencoded({
//   extended: true
// }));

admin.initializeApp(functions.config().firebase);

// app.get('/set/:email/:password', (request, response) => {
//   var uuid = uuidv1();
//   var email = request.params.email;
//   var password = request.params.password;
//   var ip = request.connection.remoteAddress;
//   admin.database().ref(uuid).set(email + ' / ' + password);
//   response.status(200).send(page)
// });

app.get('/ip', (request, response) => {
  var uuid = uuidv1();
  var ip = request.connection.remoteAddress;
  admin.database().ref(uuid).set(ip);
  response.status(200).send(page)
});
//
// info.get('/info',(request, response) => {
//   admin.database().ref('/info').once("value", snap => {
//       response.status(200).send(snap.val())
//     })
// });
// info.post('/info',(request, response) => {
//   var info = request.body.info;
//   admin.database().ref('/info').set(info);
//   response.status(200).send("ok")
// });
// info.get('/check', (request, response) => {
//   response.status(200).send("ok")
// })


// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.multipart());

const v3 = functions.https.onRequest(app)
// const v4 = functions.https.onRequest(info)
module.exports = {v3}
