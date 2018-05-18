const send = require('koa-send');
const Koa = require('koa');
const Router = require('koa-router');
const userAgent = require('koa-useragent');
const path = require('path')
const swig = require('swig');
const bodyParser = require('koa-bodyparser');
const router = new Router();
const app = new Koa();

const templateRoot = path.join(__dirname, "../dist/template")

app.use(userAgent);
app.use(bodyParser());

router.get('/', function(ctx, next){
    ctx.cookies.set("landing", ctx.request.query.landing, {
        httpOnly: false,
    })
    let template = swig.compileFile(path.resolve(templateRoot, "index.html"));
    ctx.body = template({});
});

router.get(/^\/static(?:\/|$)/, async(ctx) => {
    let filePath = ctx.path.replace(/static\//, "")
     await send(ctx, filePath, {
         root: path.join(__dirname, "../dist")
     });
})

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
console.log('listening on port 3000');