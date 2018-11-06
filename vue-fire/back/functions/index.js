const functions = require('firebase-functions');
const express = require("express")
const admin = require("firebase-admin")
const fs = require('fs');
admin.initializeApp();
const app1 = express()
app1.get('/eureka', (req,res) => {
  admin.database().ref('Cvdownloaded/val').once("value", snap => {
      var num = snap.val()
      console.log(num)
      num ++
      admin.database().ref('Cvdownloaded').update({"val":num})
      res.download(__dirname + "/templates/Enrique Ramos.pdf")
    })
})
const api1 = functions.https.onRequest(app1)  
module.exports = {
  api1
}
