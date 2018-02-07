const http = require('http');
const module1 = require('./module1');   // using multiple module.exports
const module2 = require('./module2');   // using only one module.exports as a javascript object with properties as members to be exported

const hostName = '127.0.0.1';
const port = 3000;

/*
    Named function

function onRequest(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type','text/plain');
    
    response.write('Hello World');
    
    response.end();
}

const server = http.createServer(onRequest);

*/

/*
    Below is Anonymous Function
*/

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type','text/plain');
    
    // module1.testFunction();
    // response.write(module1.testString);

    module2.testFunction();
    response.write(module2.testString);
    
    response.end();
});

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`);
});