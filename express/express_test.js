const express = require('express');

const app = express();

app.get("/",(req,res) => {
    res.send("hello world")
});

const server = app.listen(8021,() => {
    let address = server.address().address;
    let port = server.address().port;
    console.log("Listen is run %s",port)
})