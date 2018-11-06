const express = require('express')
var app = express()

app.get('/', (req, res)=>{
res.send("Hello word")
})
app.listen(3000, function() {
  console.log('Port: 3000');
})
