const express = require("express");
const cookieParser = require("cookie-parser");
const util = require("util");

const app = express();

app.use(cookieParser());

app.get("/",(req,res) => {
    console.log('TAG', 'Cookies : ' + util.inspect(req.cookies));
});

const server = app.listen(8082,() => {
    let host = server.address().address;
    let port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})