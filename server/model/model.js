const mongoose = require("mongoose");
const DB_URL = "mongodb://127.0.0.1:27017/gameBox";

mongoose.connect(DB_URL, { useNewUrlParser: true });

mongoose.connection.on("connected", () => {
  console.log("mongoose at success");
});

const models = {
  game: {
    img_url: { type: String, require: true },
    title: { type: String, require: true },
    people: { type: String, require: true }
  }
};


for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]));
}

module.exports = {
  getModel: function(name) {
    return mongoose.model(name);
  }
};
