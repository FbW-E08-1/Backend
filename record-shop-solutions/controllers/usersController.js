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

export const getUsers = (req, res, next) => {
  const { users } = db.data;
  res.status(200).json(users);
};

export const getUser = async (req, res, next) => {
  const { users } = db.data;
  let myId = await users.find((v) => v.id === req.params.id);

  res.status(200).json(myId);
};

export const deleteUser = async (req, res, next) => {
  const { users } = db.data;
  //   let myId = await users.find((v) => v.id === req.params.id);
  const removeIndex = users.findIndex((item) => item.id === req.params.id);

  if (removeIndex != -1) {
    users.splice(removeIndex, 1);
  }
  await db.write();
  res.status(200).send(db.data);
};

export const updateUser = async (req, res, next) => {
  const { users } = db.data;
  let user = await users.find((v) => v.id === req.params.id);

  const { firstName, lastName, email, password } = req.body;
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.password = password;

  await db.write();
  res.status(200).json(user);
};

export const addUser = async (req, res, next) => {
  const { users } = db.data;
  console.log(users);
  users.push({ ...req.body, id: Date.now().toString() });
  await db.write();
  res.status(200).send(users);
};
