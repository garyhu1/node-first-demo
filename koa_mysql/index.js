const Sequelize = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(config.database,config.username,config.password,{
    host: config.host,
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
        idle: 3000
    }
});

// 定义model
let Pet = sequelize.define('pet',{
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
    version: Sequelize.BIGINT
},
{
    timestamps: false
});

var now = Date.now();

Pet.create({
    id: 'g-' + now,
    name: 'Gaffey',
    gender: false,
    birth: '2007-07-07',
    createdAt: now,
    updatedAt: now,
    version: 0
}).then(function (p) {
    console.log('created.' + JSON.stringify(p));
}).catch(function (err) {
    console.log('failed: ' + err);
});