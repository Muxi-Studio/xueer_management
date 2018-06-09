const send = require('koa-send');
const Koa = require('koa');
const Router = require('koa-router');
const userAgent = require('koa-useragent');
const path = require('path')
const swig = require('swig');
const bodyParser = require('koa-bodyparser');
const router = new Router();
const app = new Koa();

const templateRoot = path.join(__dirname, "../dist/")

app.use(userAgent);
app.use(bodyParser());

router.get(/^\/static(?:\/|$)/, async(ctx) => {
    let filePath = ctx.path.replace(/static\//, "")
     await send(ctx, filePath, {
         root: path.join(__dirname, "../dist/static")
     });
})


router.get("/", function(ctx, next){
    if (ctx.cookies.get("token")) {
        let template = swig.compileFile(path.resolve(templateRoot, "index.html"));
        ctx.body = template({});
    } else {
        // for develop
        ctx.redirect("https://user.muxixyz.com/?landing=localhost:3000/landing")
        // for production
        // ctx.redirect("https://user.muxixyz.com/?landing=xxx/landing")
    }
});

router.get(/^\/(.*)$/, function(ctx, next){
    ctx.cookies.set("landing", ctx.request.query.landing, {
        httpOnly: false,
    })
    let template = swig.compileFile(path.resolve(templateRoot, "index.html"));
    ctx.body = template({});
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
console.log('listening on port 3000');