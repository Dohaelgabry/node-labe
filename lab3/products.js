const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.get("/", function (req, res) {
  let product = fs.readFileSync("products.json", "utf-8");
  res.send(product);
});

app.get("/products", function (req, res) {
  let product = fs.readFileSync("products.json", "utf-8");
  res.send(product);
});

app.get("/products/:id", function (req, res) {
  let product = fs.readFileSync("products.json", "utf-8");
  product = JSON.parse(product);
  let index = req.params.id - 1;
  console.log(index);
  console.log(product[index]);
  for (let x in product) {
    console.log(x);
    if (index > product.length) {
      res.status(404).send("not found");
    } else if (index == x) {
      res.send(product[x]);
    }
  }
});

app.listen(7000, function () {
  console.log("listen");
});

//	What’s Middleware?and why we use it?
//Middleware:
//in the context of distributed applications is software that provides services beyond those provided by the operating system to enable the various components of a distributed system to communicate and manage data
//when it’ll be called?
//at first
