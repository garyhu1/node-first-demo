const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: 'root',
    password: '*****',
    database: 'websites'
});

const pool = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: 'root',
    password: 'lyyahww09081020',
    database: 'websites'
});

// const connection = mysql.createConnection({
//     host : "localhost",
//     port : "3306",
//     database : "websites",
//     user : "root",
//     password : "lyyahww09081020"
// });

const getUser = (id) => {

    let sql = "SELECT * FROM web where id = ?";
    let sqlParams = [id];
    return new Promise((resolve,reject) => {
        pool.getConnection(function (error, connection) {
            if (error) {
                reject(error)
            } else {
                connection.query(sql, sqlParams, (err, rows) => {

                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    });
}

const queryAll = () => {
    let sql = "SELECT * FROM web";

    return new Promise((resolve,reject) => {
        pool.getConnection((error,connection) => {
            if(error){
                reject(error);
            }else {
                connection.query(sql, (err, rows) => {
                    if(err) {
                        reject(err);
                    }else {
                        resolve(rows);
                    }

                    connection.release()
                });
            }
        });
    });
}

const addUser = async (id) => {
    connection.connect();
    let sql = "SELECT * FROM web where id = ?";
    let sqlParams = [id];
    let result = await connection.query(sql,sqlParams);
    unConnection();
    return result;
}

const updateUser = async (id) => {
    connection.connect();
    let sql = "SELECT * FROM web where id = ?";
    let sqlParams = [id];
    let result = await connection.query(sql,sqlParams);
    unConnection();
    return result;
}

const unConnection = () => {
    connection.end();
}

module.exports = {
    getUser,
    queryAll,
    addUser,
    updateUser,
    unConnection
}