const { getUser, queryAll } = require("../mysql");
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: 'root',
    password: 'lyyahww09081020',
    database: 'websites'
});

const index = async (ctx,next) => {
    ctx.body = "<h1>数据库操作（Mysql）</h1>";
    await next();
}

const getUserById = async (ctx,next) => {
    let id = ctx.params.id;
    let result = await getUser(id);
    console.log('MYSQL', result);
    console.log('MYSQL', "hello");
    ctx.body = result;
    await next();
}

const listUser = async (ctx,next) => {
    let result = await queryAll();
    console.log('MYSQL', result);
    console.log('MYSQL', "hello");
    ctx.body = result;
    await next();
}

module.exports = {
    index,
    getUserById,
    listUser
}