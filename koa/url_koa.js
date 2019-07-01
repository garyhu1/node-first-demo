const Koa = require("koa");
// require("koa-router")返回的是函数
const router = require("koa-router")();
// 用来解析原始request请求，然后，把解析后的参数，绑定到ctx.request.body中
const bodyParser = require("koa-bodyparser");

const app = new Koa();

app.use(async (ctx,next) => {
    console.log('KOA', `${ctx.request.method} ${ctx.request.url}`);
    await next();
});

// 必须在router之前注册到app中
app.use(bodyParser());

router.get("/hello/:name",async (ctx,next) => {
    let name = ctx.params.name;
    ctx.response.body = `<h1>hello ${name} !</h1>`
    await next();
});

router.get("/",async (ctx,next) => {
    ctx.response.body = "<h1>Index.html</h1>"
    await next();
});

router.get("/login",async (ctx,next) => {
    ctx.body = `<h1>Login</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="garyhu"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
    await next();
});

router.post("/signin",async (ctx,next) => {
    let 
       name = ctx.request.body.name || "",
       password = ctx.request.body.password;
    console.log('LOGIN', `Login with : username is ${name} and password is ${password}`);
    
    if(name === "garyhu" && password === "123456"){
        ctx.response.body = `<h1>Welcome ${name}</h1>`
    }else {
        ctx.response.body = `<h1>Login fail</h1>
            <a href="/login">Try again</a>
        `
    }

    await next();
});

app.use(router.routes())

app.listen(4001,() => {
    console.log( 'Koa Server is Running at http://localhost:4001/');
})