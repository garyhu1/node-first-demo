const express = require("express");
const url = require("url");
var bodyParser = require('body-parser');

const app = express();

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use("/public",express.static("public"));

app.post("/",(req,res) => {
    res.json({
        code: 0,
        data :'This is message from node container'
    });
    // res.send("Hello Express !");
});

app.get("/list_user",(req,res) => {
    console.log('TAG', '/list_uer POST 请求');
    res.send("用户列表");
});

app.get("/del_user",(req,res) => {
    console.log('TAG', '/del_uer GET 请求');
    res.send("删除当前用户");
});

app.get("/get*",(req,res) => {
    console.log('TAG', url.parse(req.url).pathname+' GET 请求');
    res.send("正则表达式的url");
});

app.get("/index.html",(req,res) => {
    res.sendFile(__dirname + "/" + "index.html");
});

app.get("/show_user",(req,res) => {
    // 输出 JSON 格式
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    console.log(response);
    res.json(response);
    // res.end(JSON.stringify(response));
});

app.post('/show_user_post', urlencodedParser, function (req, res) {
 
    // 输出 JSON 格式
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })

const server = app.listen("8012",() => {
    var host = server.address().address
    var port = server.address().port
 
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
