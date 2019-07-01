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

// 向数据库中添加数据(增)
function addPet(pet) {
    Pet.create(pet)
       .then(p => {
          console.log('created.' + JSON.stringify(p));
       })
       .catch(err => {
          console.log('failed: ' + err);
       });
}

let pet = {
    id: 'g-' + now,
    name: 'Gaffey',
    gender: false,
    birth: '2007-07-07',
    createdAt: now,
    updatedAt: now,
    version: 0
}

// 查询Pet(查)
async function queryPet(value){
    let pets = [];
    if(value) {
        pets = await Pet.findAll({
            where: {
                name: value
            }
        })

        return pets;
    }else {
        pets = await Pet.findAll();
    }

    for(let pet of pets) {
        console.log(JSON.stringify(pet))
    }
}

// 更新Pet(改)
async function updatePet(pet) {
    let p = await queryPet("Garyhu");

    console.log(JSON.stringify(p))
    let res = p[0];
    res.gender = pet.gender;
    res.updatedAt = pet.updatedAt;
    res.version = pet.version;

    await res.save();
}

// 删除某条数据(删)
async function deletePet(id) {
    let res = await Pet.findAll({
        where: {
            id: id
        }
    });

    let p = res[0];

    await p.destroy();
}

// addPet(pet);

// queryPet();

let updateP = {
    gender: true,
    version: 1,
    updatedAt: Date.now()
}

// updatePet(updateP);

deletePet("g-1561983506188");
