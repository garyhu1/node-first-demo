
const url = require("url");
const path = require("path");
const fs = require("fs");
const http = require("http");

var root = path.resolve(process.argv[2]|| ".");
      
var server = http.createServer((request,response) => {

    var pathname = url.parse(request.url).pathname;

    // 拼接路径
    var filePath = path.join(root,pathname);

    fs.stat(filePath,(err,stats) => {
        if(!err){
            // 文件读取成功
            if(stats.isFile()){
                console.log('TAG', '200 ' + request.url);
                response.writeHead(200,{"Content-Type" : "text/html"});

                fs.createReadStream(filePath).pipe(response);
            }else if(stats.isDirectory()){
            }
        }else {

            // 文件读取失败
            console.log('TAG', '404 ' + request.url);

            response.writeHead("404");

            response.end("404 Not Found")
        }
    })
});   

server.listen("8843");

console.log("Server is Running at http://127.0.0.1:8843/")