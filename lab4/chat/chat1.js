const express = require("express");
const app = express();
const port = 3000;
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const path = require("path");

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "chat1.html")));

io.on("connection", (client) => {
  console.log(client.id);
  client.on("sendmsg", function (data) {
    client.broadcast.emit("msg", data);
  });
});

server.listen(port, () => console.log(`lesting in ${port}`));
