const fs = require("fs");
const express = require("express");

const app = express();

app.get("/listUsers",(req,res) => {
    let path = __dirname + "/" + "user.json";
    fs.readFile(path, "utf8",(err,data) => {

        res.end(data);
    });
});

//添加的新用户数据
var user = {
    "user4" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 }

const server = app.listen(8083, () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
})