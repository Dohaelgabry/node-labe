const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});
app.post("/login", (req, res) => {
  let users = fs.readFileSync("serverdata.json", "utf-8");
  users = JSON.parse(users);
  console.log(users);
  for (let x in users) {
    if (req.body.user == users[x].user) {
      res.send(` Welcome: ${users[x].user}`);
    }
    res.send("invalid credentials");
  }
});
app.listen(9000, () => {
  console.log("listen in server9000");
});
