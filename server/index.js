const send = require("koa-send");
const Koa = require("koa");
const Router = require("koa-router");
const userAgent = require("koa-useragent");
const path = require("path");
const swig = require("swig");
const bodyParser = require("koa-bodyparser");
const router = new Router();
const app = new Koa();

const templateRoot = path.join(__dirname, "../dist/");

app.use(userAgent);
app.use(bodyParser());

app.use(async (ctx, next) => {
  if (ctx.cookies.get("xueer_token") || /(static|landing)/.test(ctx.path)) {
    await next();
  } else {
    // for develop
    ctx.redirect("https://user.muxixyz.com/?landing=localhost:3000/webadmin/landing")
    // for production
    // ctx.redirect(
    //   "https://user.muxixyz.com/?landing=xueer.muxixyz.com/webadmin/landing"
    // );
  }
});

router.get(/^\/webadmin\/static(?:\/|$)/, async ctx => {
  await send(ctx, ctx.path, {
    root: path.join(__dirname, "../dist")
  });
});

router.get(/^\/webadmin\/(.*)$/, function(ctx, next) {
  let template = swig.compileFile(path.resolve(templateRoot, "index.html"));
  ctx.body = template({});
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log("listening on port 3000");
