const express = require("express");
const server = express();

require("dotenv").config();

// const port = 8080;
server.listen(process.env.PORT, () => {
  console.log("Listening on port 8080");
  console.log(process.env.MESSAGE);
});

server.use("*", (req, res) => {
  res.send("<h1>Hello Heroku!</h1>");
});
