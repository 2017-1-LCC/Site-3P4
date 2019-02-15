//Install express server
const express = require('express');
const app = express();
const path = require('path');
const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer);
const port = process.env.PORT || 8080;

// Serve only the static files form the dist directory
app.use(express.static('./'));

httpServer.listen(port,function() {
    console.log('run http server '+port);
})
