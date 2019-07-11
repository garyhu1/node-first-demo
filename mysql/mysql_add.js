const mysql = require("mysql");

let connection = mysql.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "*****",
    database : "websites"
});

connection.connect();

let addSql = "insert into web(id,name,url,alexa,country) values (0,?,?,?,?)";
let addSqlParams = ["Github","https://www.github.com/",53,"USA"];

connection.query(addSql,addSqlParams,(err,result) => {
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
       }        

      console.log('--------------------------INSERT----------------------------');
      //console.log('INSERT ID:',result.insertId);        
      console.log('INSERT ID:',JSON.stringify(result));        
      console.log('-----------------------------------------------------------------\n\n');  
});

connection.end();