//Dependencies
const mongoose = require("mongoose");
const keys = require("../config/keys");

mongoose
  .connect(keys.mongodb_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("conneted mongodb"))
  .catch((err) => console.log(err));
