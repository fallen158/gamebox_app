const koa = require("koa");
const app = new koa();
const router = require("./api/game");
const bodyParser = require("koa-bodyparser");

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.listen(5858, () => {
  console.log("app listen at port 5858");
});
