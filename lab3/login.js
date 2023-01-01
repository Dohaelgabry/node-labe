const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "login.html"));
});
app.post("/login", function (req, res) {
  let user_name = fs.readFileSync("login.json", "utf-8");
  user_name = JSON.parse(user_name);
  console.log(req.body);
  user_name.push(req.body);
  fs.writeFileSync("login.json", JSON.stringify(user_name, null, 2), "utf-8");

  // res.sendFile(path.join(__dirname, "login.json"));

  res.send("Welcome " + user_name[user_name.length - 1].user);
});
app.listen(8000, function () {
  console.log("listen server 8000");
});
