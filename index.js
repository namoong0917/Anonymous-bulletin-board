const express = require("express");
const mysql = require("mysql");
const dbConfig = require("./config/db.js");
const connection = mysql.createConnection(dbConfig);

const app = express();

app.use(express.static("public"));

app.set("port", process.env.PORT || 3000);
app.get("/", (req, res) => {
  res.end("Hello World");
});

app.get("/test", (req, res) => {
  res.end(
    "<html><head><title>Test Title</title></head>\
    <body><h1>Test</h1></body></html>"
  );
});

app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/class", (req, res) => {
  res.sendFile(__dirname + "/public/html/class.html");
});

app.get("/view", (req, res) => {
  res.sendFile(__dirname + "/public/html/view.html");
});

app.get("/write", (req, res) => {
  res.sendFile(__dirname + "/public/html/write.html");
});

app.listen(app.get("port"), () => {
  console.log("express server running on port 3000");
});
