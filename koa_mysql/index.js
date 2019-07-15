const Sequelize = require("sequelize");
const config = require("./config");

// 初始化sequelize ，设置一个连接池
const sequelize = new Sequelize(config.database,config.username,config.password,{
    host: config.host,
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
        idle: 3000
    }
});

// 或者可以简单的使用一个连接 uri
// const sequelize = new Sequelize('mysql://user:pass@your host:your port/dbname');

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

Pet.sync().then(res => {
    console.log(JSON.stringify(res))
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

// deletePet("g-1561983506188");

function findById(id) {
    Pet.findOne({
        where: {
            id
        }
    })
        .then(pet => {
            console.log(JSON.stringify(pet))
        })
        .catch(err => {
            console.log(err)
        });
}

function findOrCreate(id) {
    let now = Date.now();
    // 查找，没有就创建一个
    Pet.findOrCreate({
        where: {
            id
        },
        defaults: {
            name: 'iven',
            gender: 0,
            birth: "1995-10-02",
            createdAt: now,
            updatedAt: now,
            version: 0
        }
    })
        .spread((pet,created) => {
            console.log('PETS', JSON.stringify(pet));
            console.log('PETS', created);
        });
}

// findOrCreate("g-"+Date.now());

function findAndCountAll() {
    Pet.findAndCountAll({
        where: {  
        },
        limit: 3,
        offset: 2
    })
        .then(result => {
            console.log('count', JSON.stringify(result.count));
            console.log('row', JSON.stringify(result.rows));
        })
        .catch(err => {
            console.log(JOSN.stringify(err));
        });
}

// findAndCountAll();

// 操作符使用失败
function findAll() {
    Pet.findAll({
        where: {
            // gender: [0,1] // 或者
            'name': { // 这样写报错
                $eq: "Gaffey"
            }
        }
    })
        .then(result => {
            console.log('findall result', JSON.stringify(result));
        })
        .catch(err => {
            console.log(err)
        });
}

findAll();
