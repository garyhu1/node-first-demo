 const fs = require("fs");

 var readable = fs.createReadStream("sample.txt");

 var writable = fs.createWriteStream("copied.txt");
 
 readable.pipe(writable);