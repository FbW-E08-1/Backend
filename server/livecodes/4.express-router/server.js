const express = require("express");
const items = require("./routes/items");

const app = express();

const port = process.env.PORT || 5000;

//http://localhost:5000/items
app.use("/items", items);

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(port, () => {
  console.log("Listeting on port: ", port);
});
