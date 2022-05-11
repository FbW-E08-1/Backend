import express from "express";

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

//Create a data
app.post("/api/records", async (req, res, next) => {
  const { records } = db.data;
  records.push({ ...req.body, id: Date.now().toString() });
  await db.write();
  res.status(200).send(records);
});

//Read (get) the data
app.get("/api/records", (req, res, next) => {
  const { records } = db.data;
  res.status(200).json(records);
});

app.listen(port, () => {
  console.log("Listening on port: ", port);
});
