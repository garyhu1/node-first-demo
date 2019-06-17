var fs = require("fs");

// 读取文件,读取文本文件时，需要设置编码格式，读取图片时不需要设置编码格式
fs.readFile("sample.txt","utf-8",(err,data) => {
    if(err){
        console.log('TAG', 'this is a error : ' + err.message);
    }else {
        console.log('TAG', 'data : ' + data);
    }
});

var data = "please, hardwork for future !"

// 写文件
fs.writeFile("sample.txt",data,(err) => {
    if(err){
        console.log('TAG', 'this is a error : ' + err.message);
    }else {
        console.log('TAG', 'data is successful for write' );
    }
});