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

// ----------- mongoose ------------------
import orderModel from "../models/orderModel.js";

// -----------------------------------------

//Controllers

export const getOrders = async (req, res, next) => {
  // const { orders } = db.data;
  // res.status(200).json(orders);
  // const resultArray = [];

  // MongoClient.connect(url, (err, client) => {
  //   try {
  //     const db = client.db(dbName);
  //     const collection = db.collection("orders");
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
    const result = await orderModel.find().populate("record");
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getOrder = async (req, res, next) => {
  // const { orders } = db.data;
  // let order = await orders.find((v) => v.id === req.params.id);
  // res.status(200).json(order);
  // const resultArray = [];

  // MongoClient.connect(url, (err, client) => {
  //   try {
  //     const db = client.db(dbName);
  //     const collection = db.collection("orders");
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
    const order = await orderModel.findById(req.params.id).populate("record");
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

export const deleteOrder = async (req, res, next) => {
  // const { orders } = db.data;
  //   let myId = await users.find((v) => v.id === req.params.id);
  // const removeIndex = orders.findIndex((item) => item.id === req.params.id);

  // if (removeIndex != -1) {
  //   orders.splice(removeIndex, 1);
  // }
  // await db.write();
  // res.status(200).send(db.data);
  // MongoClient.connect(url, (err, client) => {
  //   try {
  //     const db = client.db(dbName);
  //     const collection = db.collection("orders");
  //     collection.deleteOne({ _id: ObjectId(req.params.id) });
  //     res.status(200).json({ msg: "The order was successfully deleted!" });
  //   } catch (error) {
  //     next(error);
  //   }
  // });
  try {
    const order = await orderModel.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: "Order deleted!!" });
  } catch (e) {
    next(e);
  }
};

export const updateOrder = async (req, res, next) => {
  // const { orders } = db.data;
  // let order = await orders.find((v) => v.id === req.params.id);
  // const { quantity, record_id } = req.body;
  // order.quantity = quantity;
  // order.record_id = record_id;
  // await db.write();
  // res.status(200).json(order);
  // MongoClient.connect(url, (err, client) => {
  //   try {
  //     const db = client.db(dbName);
  //     const collection = db.collection("orders");
  //     collection.updateOne(
  //       { _id: ObjectId(req.params.id) },
  //       { $set: req.body },
  //     );
  //     res.status(200).json({ msg: "The order was successfully updated!" });
  //   } catch (error) {
  //     next(error);
  //   }
  // });
  try {
    const order = await orderModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(order);
  } catch (e) {
    next(e);
  }
};

export const addOrder = async (req, res, next) => {
  // const { orders } = db.data;
  // orders.push({ ...req.body, id: Date.now().toString() });
  // await db.write();
  // res.status(200).send(orders);
  // const order = {
  //   quantity: req.body.quantity,
  //   record_id: req.body.record_id,
  // };
  // MongoClient.connect(url, (err, client) => {
  //   try {
  //     const db = client.db(dbName);
  //     const collection = db.collection("orders");
  //     collection.insertOne(order);
  //     res.status(200).json(order);
  //   } catch (error) {
  //     next(error);
  //   }
  // });
  try {
    const order = new orderModel(req.body);
    await order.save();
    res.status(200).json(order);
  } catch (e) {
    next(e);
  }
};
