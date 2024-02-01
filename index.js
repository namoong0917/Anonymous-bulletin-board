const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3000);
app.get("/", (req, res) => {
  res.end("Hello World");
});
app.listen(app.get("port"), () => {
  console.log("express server running on port 3000");
});
