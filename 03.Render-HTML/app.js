const http = require('http');
const fs = require('fs');

const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    
    // response.statusCode = 200;
    // response.setHeader('Content-Type','text/plain');

    // OR

    response.writeHead(200, {'Content-Type':'text/html'});
    
    fs.readFile('./index.html', null, function(error, data){
        if(error) {
            response.writeHead(404);
            response.write('file not found');
        } else {
            response.write(data);
        }

        response.end();
    });

    // This will get executed before the read file is completed and call back is executed
    // Hence moved inside read file
    // response.end();
});

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`);
});