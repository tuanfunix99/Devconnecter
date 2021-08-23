//Dependencies
const express = require("express");
const userRoutes = require("./routes/api/userRoutes");
const authRoutes = require("./routes/api/authRoutes");
const profileRoutes = require("./routes/api/profileRoutes");
const postRoutes = require("./routes/api/postRoutes");
const keys = require("./config/dev");
const path = require('path');
require("./data/db");

//Intanstiate app
const app = express();

app.use(express.json());

//use routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/post", postRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

//listen server on port
app.listen(keys.port, () => {
  console.log("Listening on port 8080");
});
