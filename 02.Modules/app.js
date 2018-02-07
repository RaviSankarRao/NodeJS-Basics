const http = require('http');
const module1 = require('./module1');

const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type','text/plain');
    module1.testFunction();
    response.write(module1.testString);
    response.end();
});

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`);
});