const express = require("express");

const app = express();

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);

const data = require("./posts.json");

app.get("/api/jobs", (req, res) => {
  res.send(data);
});
