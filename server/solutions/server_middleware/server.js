// server.js
// controllers/userController.js
// middleware/validation.js
// middleware/sanitization.js

import express from "express";
import cors from "cors";
import logger from "morgan";
import { isAdult, isFam, validKeys } from "./middleware/validation.js";
import {
  sanitizationResponse,
  validationResponse,
} from "./controllers/userController.js";
import {
  sanitizeName,
  sortBands,
  stringsToNumbers,
} from "./middleware/sanitization.js";

//DB -----------------------------
//lowdb
import { join, dirname } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

//Use JSON file for storage
const file = join(__dirname, "db.json");

const adapter = new JSONFile(file);
const db = new Low(adapter);
await db.read();
db.data ||= { records: [] };

//------------------------------------------
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(logger("dev"));

app.post("/validateUser", isAdult, validKeys, isFam, validationResponse);
app.post(
  "/sanitizeUser",
  sanitizeName,
  stringsToNumbers,
  sortBands,
  sanitizationResponse,
);

//Create a data
app.post("/add", async (req, res, next) => {
  const { records } = db.data;
  records.push({ ...req.body, id: Date.now().toString() });
  await db.write();
  res.status(200).send(records);
});

//Read (get) the data
app.get("/get", (req, res, next) => {
  const { records } = db.data;
  res.status(200).json(records);
});

//Update
app.put("/update/:id", (req, res, next) => {
  //1. get records from db.data
  //2. find() id ==>req.params.id
  //3. update properties
  //save
});

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
