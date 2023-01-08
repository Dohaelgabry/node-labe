const express = require("express");
const app = express();
const fs = require("fs");
///Return the list of todos
app.get("/todos", (req, res) => {
  let users = fs.readFileSync("todos.json", "utf-8");
  res.send(users);
});

///Get  the todo with selected id
app.get("/todos/:id", function (req, res) {
  let users = fs.readFileSync("todos.json", "utf-8");
  users = JSON.parse(users);
  let index = req.params.id - 1;
  console.log(users);
  console.log(users[index]);
  for (let x in users) {
    console.log(x);
    if (index == x) {
      res.send(users[x]);
    }
  }
});
app.listen(7000, () => {
  console.log("listen in server7000");
});
