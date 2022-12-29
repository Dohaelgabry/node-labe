/////1
// const fs = require("fs");
// let productsDB = fs.readFileSync("text.json", "utf-8");
// productsDB = JSON.parse(productsDB);
// console.log(productsDB);
/////2
const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, resp) {
    console.log("in server 9000");
    let x = req.url.split("/");
    //localhost:9000/ /
    // console.log(x);
    //x[2]
    if (req.url == "/home") {
      resp.write("welcome to our APIs");
    } else if (req.url == "/products") {
      let html = fs.readFileSync("text.json", "utf-8");
      resp.write(html);
    } else if (x[2]) {
      let id = x[2];
      let html = fs.readFileSync("text.json", "utf-8");
      html = JSON.parse(html);
      // console.log(html);
      html.forEach((element) => {
        // console.log(element);
        if (id == element.id) {
          resp.write(JSON.stringify(element));
        }
      });
    } else {
      resp.write("Erro 404");
    }

    resp.end();
  })
  .listen(9000, function () {
    console.log("listen in port 9000");
  });

//////3
//What’s npm?
//answer:
//npm is two things:
//  it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management. A plethora of Node.js libraries and applications are published on npm, and many more are added every day.

//how to use it to install packages locally or globally?
//answer:
// Install it locally if you're going to require() it.
// Install it globally if you're going to run it on the command line.
// If you need both, then install it in both places, or use npm link.
