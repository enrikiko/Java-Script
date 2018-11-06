const port = 3000;
const http = require('http');
const server = http.createServer((req,res)=>{
  if(req.url==='/'){
    res.write('You are in the index');
    res.end();
  }
  if(req.url==="/list"){
    res.write(JSON.stringify([1,2,3,4]))
    res.end();
  }
});
server.on('connection', (socket)=>{
  console.log("New connection...");
})
server.listen(port);
console.log(`Listening at port ${port}` );
