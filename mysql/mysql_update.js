const mysql = require("mysql");

let connection = mysql.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "*****",
    database : "websites"
});

connection.connect();

let updateSql = "update web set id = ? where name = ?";
let updateSqlParams = [6,"Github"];

connection.query(updateSql,updateSqlParams,(err,result) => {
    if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
  }        
 console.log('--------------------------UPDATE----------------------------');
 console.log('UPDATE affectedRows',result.affectedRows);
 console.log('-----------------------------------------------------------------\n\n');
});