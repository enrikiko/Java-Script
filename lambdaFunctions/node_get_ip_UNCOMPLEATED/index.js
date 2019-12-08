const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-central-1'});
var uuid = require('uuid');
const express = require("express")
const app = express()
app.enable('trust proxy')

app.get("*", (request, response) => {
  response.status(200).send(request.ip)
})

exports.handler = app
