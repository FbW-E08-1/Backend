// server.js
// controllers/userController.js
// middleware/validation.js
// middleware/sanitization.js

import express from "express";
import cors from "cors";
import logger from "morgan";
import { isAdult, validKeys } from "./middleware/validation.js";
import { validationResponse } from "./controllers/userController.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.post("/validateUser", isAdult, validKeys, validationResponse);

//GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

app.listen(port, () => {
  console.log("Listening on port: ", port);
});
