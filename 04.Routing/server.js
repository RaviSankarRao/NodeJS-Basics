var http = require('http');
var app = require('./app');

const hostName = '127.0.0.1';
const port = 3000;

http.createServer(app.handleRequest).listen(port, hostName,() => console.log(`Server running at http://${hostName}:${port}/`));