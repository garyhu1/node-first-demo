var Koa = require("koa");

const app = new Koa();

app.use(async (ctx,next) => {

    ctx.response.type = 'text/html';
    ctx.response.body = "<h1>Hello Koa !</h1>"

    await next();
});

app.listen(4000);

console.log( 'Koa Server is Running at http://127.0.0.1:4000/');