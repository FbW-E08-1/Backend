const express = require("express");
const logger = require("morgan");

const orderRoutes = require("./routes/routes");

const app = express();

const port = process.env.PORT || 5000;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/orders", orderRoutes);

//Error 404
app.use((req, res, next) => {
  const error = new Error("Hey! Page not Found!");
  error.status = 404;
  next(error);
});

//GLOBAL ERROR HANDLER MIDDLEWARE
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      msg: error.message,
    },
  });
});

app.listen(port, () => {
  console.log("Server listineng on port: ", port);
});

// server.js
// routes/routes.js
// controllers/orderControllers.js
