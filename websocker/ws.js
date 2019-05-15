var WebSockerServer = require('ws').Server
var wss = new WebSockerServer({ port: 3000 })

wss.on('connection', function(ws) {
  ws.send(Date.now())
  console.warn('New Connection', Date.now());
})

wss.on('message', function incoming(data) {
  ws.send(data)
  console.warn('New Message');
});
