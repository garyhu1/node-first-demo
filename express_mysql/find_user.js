const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
    host : "localhost",
    port : "3306",
    database : "websites",
    user : "root",
    password : "lyyahww09081020"
});

app.get("/",(req,res) => {
    res.end("Hello SQL");
});

app.get("/listUser",(req,res) => {
    connection.connect();

    let sql = "SELECT * from web";

    connection.query(sql,(err,data) => {
        let result;
        if(err){
            result = {
                code : 1,
                message : "程序有误"
            }
        }else {
            result = {
                code : 0,
                message : "查询成功",
                data : data
            }
        }

        res.json(result);
    });
});

let server = app.listen("8017",() => {
    let host = server.address().address
    let port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});