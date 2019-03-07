const koaRouter = require("koa-router");
const model = require("../model/model");
const Game = model.getModel("game");

// 插入数据
// Game.create({
//   img_url:'http://47.254.31.78/images/game2.png',
//   title:'暗夜复仇者3',
//   people:'355K'
// },(err,doc)=>{
//   if(!err){
//     console.log(doc)
//   }
// })

// 清空数据

const Router = new koaRouter({
  prefix: "/game"
});

Router.get("/list", async ctx => {
  // 清空数据
  // Game.remove({},()=>{})
  await Game.find({}, (err, doc) => {
    if (!err) {
      ctx.response.body = doc;
    }
  });
});



module.exports = Router;
