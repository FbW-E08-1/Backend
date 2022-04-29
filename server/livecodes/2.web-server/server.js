const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

//http://localhost:5000/
app.get("/:banana", (req, res) => {
  res.json(req.params);
});

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
