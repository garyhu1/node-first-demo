const mysql = require("mysql");

let connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "lyyahww09081020",
    port : "3306",
    database : "websites"
});

connection.connect();

let sql = "SELECT * from web";

connection.query(sql, (err,res) => {
    if(!err) {
        console.log('--------------------------SELECT----------------------------');
        console.log(JSON.stringify(res));
        console.log('------------------------------------------------------------\n\n'); 
    }
});

connection.end();