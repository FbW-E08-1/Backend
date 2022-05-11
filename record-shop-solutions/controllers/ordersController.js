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

export const getOrders = (req, res, next) => {
  const { orders } = db.data;
  res.status(200).json(orders);
};

export const getOrder = async (req, res, next) => {
  const { orders } = db.data;
  let order = await orders.find((v) => v.id === req.params.id);

  res.status(200).json(order);
};

export const deleteOrder = async (req, res, next) => {
  const { orders } = db.data;
  //   let myId = await users.find((v) => v.id === req.params.id);
  const removeIndex = orders.findIndex((item) => item.id === req.params.id);

  if (removeIndex != -1) {
    orders.splice(removeIndex, 1);
  }
  await db.write();
  res.status(200).send(db.data);
};

export const updateOrder = async (req, res, next) => {
  const { orders } = db.data;
  let order = await orders.find((v) => v.id === req.params.id);

  const { quantity, record_id } = req.body;
  order.quantity = quantity;
  order.record_id = record_id;

  await db.write();
  res.status(200).json(order);
};

export const addOrder = async (req, res, next) => {
  const { orders } = db.data;
  orders.push({ ...req.body, id: Date.now().toString() });
  await db.write();
  res.status(200).send(orders);
};
