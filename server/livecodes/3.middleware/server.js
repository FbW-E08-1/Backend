const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//http://localhost:5000/
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.post("/", (req, res) => {
  //   console.log(req.body);
  res.json(req.body);
});

//Task 3 - Add a GET request to '/hello'
app.get("/hello", (req, res) => {
  res.send("This is my message - Hello!");
});

//Task 4 - Add a GET request to '/time'
app.get("/time", (req, res) => {
  const date = new Date();
  const time = date.toLocaleString();
  res.send(time);
});

//Task 5 - Add a GET request to '/random'
app.get("/random", (req, res) => {
  const random = Math.floor(Math.random() * 100);
  res.send(`Random number is: ${random}`);
  //   res.json(random);
});

//Task 6 - Add a GET request to '/isNumber'
app.get("/isNumber/:value", (req, res) => {
  const { value } = req.params;
  if (isNaN(Number(value))) {
    res.send(`"${value}" is not a number.`);
  } else {
    res.send(`"${value}" is a number.`);
  }
});

app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
