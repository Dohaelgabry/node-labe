const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "todospost.html"));
});
app.post("/todos", (req, res) => {
  let users = fs.readFileSync("todos.json", "utf-8");
  users = JSON.parse(users);
  console.log(users);
  users.push(req.body);
  fs.writeFileSync("todos.json", JSON.stringify(users, null, 2), "utf-8");
  res.send("todo created successfully");
});
app.listen(9000, () => {
  console.log("listen in server9000");
});
