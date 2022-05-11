import express from "express";
import logger from "morgan";
import cors from "cors";

import ordersRouter from "./routes/orders.js";
import recordsRouter from "./routes/records.js";
import usersRouter from "./routes/users.js";

//DB -----------------------------
//lowdb
// import { join, dirname } from "path";
// import { Low, JSONFile } from "lowdb";
// import { fileURLToPath } from "url";

//const __dirname = dirname(fileURLToPath(import.meta.url));

//Use JSON file for storage
// const file = join(__dirname, "db.json");

// const adapter = new JSONFile(file);
// const db = new Low(adapter);
// await db.read();
// db.data ||= { records: [], users: [], orders: [] };

//------------------------------------------
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

//ROUTES

app.use("/orders", ordersRouter);
app.use("/records", recordsRouter);
app.use("/users", usersRouter);

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
