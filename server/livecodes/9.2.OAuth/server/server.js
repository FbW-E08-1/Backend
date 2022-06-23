import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import user from "./routes/user.js";

const app = express();

app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
dotenv.config();

const PORT = process.env.PORT;

//http://localhost:5000/
app.use("/", user);

app.get("/", (req, res) => {
  res.send("Hello Banana!!");
});

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connected and server running on port: ", PORT);
    });
  })
  .catch((error) => console.log(error));
