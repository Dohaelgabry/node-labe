const express = require("express");
const app = express();
const path = require("path");
// const fs = require("fs");
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

let users = [];
app.get("/addwelcome", function (req, res) {
  console.log(req.query);
  users.push(req.query);
  res.send("Welcome " + users[users.length - 1].user);
});

app.listen(9000, function () {
  console.log("listen server 9000");
});
