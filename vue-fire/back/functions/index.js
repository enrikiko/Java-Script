const functions = require('firebase-functions');
const express = require("express")
const admin = require("firebase-admin")
const fs = require('fs');
const clientIp  = require('client-id')
admin.initializeApp();
const app1 = express()
app1.get('/eureka', (req,res) => {
  admin.database().ref('Cvdownloaded/IPs').push().set({
  		"stampTime"	: 	getTime(),
  		"val"		: 	clientIp(req)		})
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


function getTime() {
  var miliSec,sec,min,hour,date,month,year,currentDate;
  currentDate =  new Date();
  miliSec = currentDate.getMilliseconds();
  hour = currentDate.getHours();
  min = currentDate.getMinutes();
  sec = currentDate.getSeconds();
  date = currentDate.getDate();
  month = currentDate.getMonth();
  year = currentDate.getFullYear();
  var txt = "Time: " + hour + ":" + min + ":" + sec + ":" + miliSec + " "+ date + "-" +(month + 1) + "-" + year;
  return txt;
}