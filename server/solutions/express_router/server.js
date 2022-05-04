const express = require("express");
const cors = require("cors");

const toys = require("./routes/products.js");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use("/products", toys);

const ingredients = [
  {
    id: "1",
    item: "Bacon",
  },
  {
    id: "2",
    item: "Eggs",
  },
  { id: "3", item: "Milk" },
  { id: "4", item: "Butter" },
];

app.get("/ingredients", (req, res) => {
  res.json(ingredients);
});

//http://localhost:5000
app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(port, () => {
  console.log("Listening on port: ", port);
});
