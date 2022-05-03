const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //   res.send("Welcome to the page I call home!");
  res.sendFile("index.html");
});

app.post("/", (req, res) => {
  const { email, password } = req.body;
  if (email === "dilshod@web.com" && password === "1234") {
    res.send(`Welcome, ${email}!`);
  } else {
    res.send("Login failed!");
  }
  //   res.json(req.body.username);
});

app.get("/about", (req, res) => {
  res.json({ msg: "javaScript!" });
});

app.get("/contact", (req, res) => {
  res.send(__dirname);
});

app.listen(port, () => {
  console.log("Listening on port: ", port);
});
