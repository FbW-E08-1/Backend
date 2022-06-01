//DB -----------------------------
//lowdb
// import { join, dirname } from "path";
// import { Low, JSONFile } from "lowdb";
// import { fileURLToPath } from "url";

//const __dirname = dirname(fileURLToPath(import.meta.url));

//Use JSON file for storage
// const file = join(__dirname, "../db.json");

// const adapter = new JSONFile(file);
// const db = new Low(adapter);
// await db.read();
// db.data ||= { records: [], users: [], orders: [] };

//------------------------------------------

// ------------  MongoDB -------------------
// import { MongoClient, ObjectId } from "mongodb";

// const url = "mongodb://localhost:27017";
// const dbName = "record-shop";

// -----------------------------------------

// ----------- mongoose ------------------
import recordModel from "../models/recordModel.js";

// -----------------------------------------

//Controllers

export const getRecords = async (req, res, next) => {
  // const { records } = db.data;
  // res.status(200).json(records);
  // const resultArray = [];
  // MongoClient.connect(url, (err, client) => {
  //   try {
  //     const db = client.db(dbName);
  //     const collection = db.collection("records");
  //     const info = collection.find();
  //     info.forEach(
  //       function (doc) {
  //         resultArray.push(doc);
  //       },
  //       function () {
  //         res.json(resultArray);
  //       },
  //     );
  //   } catch (error) {
  //     next(error);
  //   }
  // });
  try {
    const result = await recordModel.find();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getRecord = async (req, res, next) => {
  // const { records } = db.data;
  // let myId = await records.find((v) => v.id === req.params.id);
  // res.status(200).json(myId);
  // const resultArray = [];
  // MongoClient.connect(url, (err, client) => {
  //   try {
  //     const db = client.db(dbName);
  //     const collection = db.collection("records");
  //     const info = collection.find({ _id: ObjectId(req.params.id) });
  //     info.forEach(
  //       function (doc) {
  //         resultArray.push(doc);
  //       },
  //       function () {
  //         res.json(resultArray);
  //       },
  //     );
  //   } catch (error) {
  //     next(error);
  //   }
  // });
  try {
    const record = await recordModel.findById(req.params.id);
    res.status(200).json(record);
  } catch (error) {
    next(error);
  }
};

export const deleteRecord = async (req, res, next) => {
  //const { records } = db.data;
  //   let myId = await users.find((v) => v.id === req.params.id);
  // const removeIndex = records.findIndex((item) => item.id === req.params.id);
  // if (removeIndex != -1) {
  //   records.splice(removeIndex, 1);
  // }
  // await db.write();
  // res.status(200).send(db.data);
  // MongoClient.connect(url, (err, client) => {
  //   try {
  //     const db = client.db(dbName);
  //     const collection = db.collection("records");
  //     collection.deleteOne({ _id: ObjectId(req.params.id) });
  //     res.status(200).json({ msg: "The record was successfully deleted!" });
  //   } catch (error) {
  //     next(error);
  //   }
  // });
  try {
    const record = await recordModel.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: "Record deleted!!" });
  } catch (e) {
    next(e);
  }
};

export const updateRecord = async (req, res, next) => {
  // const { records } = db.data;
  // let record = await records.find((v) => v.id === req.params.id);
  // const { title, artist, year, price } = req.body;
  // record.title = title;
  // record.artist = artist;
  // record.year = year;
  // record.price = price;
  // await db.write();
  // res.status(200).json(record);
  // MongoClient.connect(url, (err, client) => {
  //   try {
  //     const db = client.db(dbName);
  //     const collection = db.collection("records");
  //     collection.updateOne(
  //       { _id: ObjectId(req.params.id) },
  //       { $set: req.body },
  //     );
  //     res.status(200).json({ msg: "The record was successfully updated.!" });
  //   } catch (error) {
  //     next(error);
  //   }
  // });
  try {
    const record = await recordModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );
    res.status(200).json(record);
  } catch (e) {
    next(e);
  }
};

export const addRecord = async (req, res, next) => {
  // const { records } = db.data;
  // records.push({ ...req.body, id: Date.now().toString() });
  // await db.write();
  // res.status(200).send(records);
  // const record = {
  //   title: req.body.title,
  //   artist: req.body.artist,
  //   price: req.body.price,
  //   year: req.body.year,
  // };
  // MongoClient.connect(url, (err, client) => {
  //   try {
  //     const db = client.db(dbName);
  //     const collection = db.collection("records");
  //     collection.insertOne(record);
  //     res.status(200).json(record);
  //   } catch (error) {
  //     next(error);
  //   }
  // });
  try {
    const record = new recordModel(req.body);
    await record.save();
    res.status(200).json(record);
  } catch (e) {
    next(e);
  }
};
