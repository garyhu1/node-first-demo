const http = require("http");

var server = http.createServer((request,response) => {

    console.log('TAG', 'method : ' + request.method + " , url : " + request.url);

    response.writeHead(200, {"Content-Type" : "text/html"});

    response.end("<h1>Hello World !</h1>");
});

server.listen("8811");

console.log('TAG', 'server is running at http://127.0.0.1:8811/');