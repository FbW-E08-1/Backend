//DB -----------------------------
//lowdb
import { join, dirname } from "path";
import { Low, JSONFile } from "lowdb";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

//Use JSON file for storage
const file = join(__dirname, "../db.json");

const adapter = new JSONFile(file);
const db = new Low(adapter);
await db.read();
db.data ||= { records: [], users: [], orders: [] };

//------------------------------------------

//Controllers

export const getRecords = (req, res, next) => {
  const { records } = db.data;
  res.status(200).json(records);
};

export const getRecord = async (req, res, next) => {
  const { records } = db.data;
  let myId = await records.find((v) => v.id === req.params.id);

  res.status(200).json(myId);
};

export const deleteRecord = async (req, res, next) => {
  const { records } = db.data;
  //   let myId = await users.find((v) => v.id === req.params.id);
  const removeIndex = records.findIndex((item) => item.id === req.params.id);

  if (removeIndex != -1) {
    records.splice(removeIndex, 1);
  }
  await db.write();
  res.status(200).send(db.data);
};

export const updateRecord = async (req, res, next) => {
  const { records } = db.data;
  let record = await records.find((v) => v.id === req.params.id);

  const { title, artist, year, price } = req.body;
  record.title = title;
  record.artist = artist;
  record.year = year;
  record.price = price;

  await db.write();
  res.status(200).json(record);
};

export const addRecord = async (req, res, next) => {
  const { records } = db.data;
  records.push({ ...req.body, id: Date.now().toString() });
  await db.write();
  res.status(200).send(records);
};
