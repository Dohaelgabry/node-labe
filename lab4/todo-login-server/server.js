const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "server.html"));
});
app.post("/register", (req, res) => {
  let users = fs.readFileSync("serverdata.json", "utf-8");
  users = JSON.parse(users);
  console.log(users);

  for (let x in users) {
    if (req.body.user == users[x].user) {
      res.send("Username already exists");
    }
  }
  users.push(req.body);
  fs.writeFileSync("serverdata.json", JSON.stringify(users, null, 2), "utf-8");
  res.send("user was registered successfully");
});
app.listen(7000, () => {
  console.log("listen in server7000");
});
