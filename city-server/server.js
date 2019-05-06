var express = require('express'),
    app     = express(),
    bodyParser = require('body-parser'),
    port    = 4000,
    fs      = require('fs'),
    path    = require('path');
    os      = require('os');

var basicHtml = fs.readFileSync("templates/basic.html", "utf8")
var download = fs.readFileSync("templates/download.html", "utf8")

function getTime() {
  currentDate = new Date()
  milliSec = currentDate.getMilliseconds()
  sec = currentDate.getSeconds()
  min = currentDate.getMinutes()
  hour = currentDate.getHours()
  date = currentDate.getDate()
  month = currentDate.getMonth()
  year = currentDate.getFullYear()
}

var logDate = function(req, res, next) {
  getTime()
  console.log("Time: " + hour + ":" + min + ":" + sec + ":" + milliSec + " " + date + "-" + month + "-" + year);
  next()
}
var logUrl = function(req, res, next) {
  console.log("Request URL: %s", req.originalUrl );
  next()
}

app.use(logDate)
app.use(logUrl)
app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.status(200).send(basicHtml)
})

app.get('/download', function(req, res) {
  res.download(__dirname + "/templates/download.txt")
})

app.get('/attachment', function(req, res) {
  res.attachment(__dirname + "/templates/download.txt")
})

app.post('/*', function (req, res) {
     console.log(req.body);
     res.status(200).send(basicHtml)
})

app.listen(port, function() {
  console.log("City server running on: %s",port);
})
