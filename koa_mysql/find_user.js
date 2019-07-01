const mysql = require("mysql");
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const router = require("koa-router")();
 
const { index, getUserById, listUser } = require("./controller");

const app = new Koa();

app.use(bodyParser());

app.use(async (ctx,next) => {
    console.log('KOA', `${ctx.method} ${ctx.url}`)
    await next();
})

router.get("/",index);

router.get("/getUser/:id",getUserById);

router.get("/listUser",listUser);

app.use(router.routes());

app.listen(4002,() => {
    console.log( 'Koa Server is Running at http://localhost:4002/');
})