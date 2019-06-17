const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();

app.use("/public",express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));

app.get("/file.html",(req,res) => {
    res.sendFile(__dirname + "/" + "file.html");
});

app.post("/file_upload",(req,res) => {
    console.log(req.files[0]);  // 上传的文件信息

    let des_file = __dirname + "/" + req.files[0].originalname;

    fs.readFile(req.files[0].path ,(error,data) => {
        if(!error){
            fs.writeFile(des_file,data,(err) => {
                let response;
            if(err){
                response = {
                    status : 3100,
                    message : "file upload fail"
                }
            }else {
                response = {
                    status : 200,
                    message : "file upload successful",
                    filename : req.files[0].originalname
                }
            }

            res.end(JSON.stringify(response));
            });
        }
    });
});

var server = app.listen(8081, function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
   
})