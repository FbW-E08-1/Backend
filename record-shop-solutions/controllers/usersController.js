//DB -----------------------------
//lowdb
// import { join, dirname } from "path";
// import { Low, JSONFile } from "lowdb";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));

//Use JSON file for storage
// const file = join(__dirname, "../db.json");

// const adapter = new JSONFile(file);
// const db = new Low(adapter);
// await db.read();
// db.data ||= { records: [], users: [], orders: [] };

//------------------------------------------

// ------------  MongoDB -------------------
import { MongoClient, ObjectId } from "mongodb";

const url = "mongodb://localhost:27017";
const dbName = "record-shop";

// -----------------------------------------

//Controllers

export const getUsers = (req, res, next) => {
  // const { users } = db.data;
  const resultArray = [];

  MongoClient.connect(url, (err, client) => {
    const db = client.db(dbName);
    const collection = db.collection("users");
    const info = collection.find();

    info.forEach(
      function (doc) {
        resultArray.push(doc);
      },
      function () {
        res.json(resultArray);
      },
    );
  });
};

export const getUser = async (req, res, next) => {
  // const { users } = db.data;
  // let myId = await users.find((v) => v.id === req.params.id);

  const resultArray = [];

  MongoClient.connect(url, (err, client) => {
    const db = client.db(dbName);
    const collection = db.collection("users");
    const info = collection.find({ _id: ObjectId(req.params.id) });

    info.forEach(
      function (doc) {
        resultArray.push(doc);
      },
      function () {
        res.json(resultArray);
      },
    );
  });
};

export const deleteUser = async (req, res, next) => {
  //const { users } = db.data;
  //   let myId = await users.find((v) => v.id === req.params.id);
  //const removeIndex = users.findIndex((item) => item.id === req.params.id);

  // if (removeIndex != -1) {
  //   users.splice(removeIndex, 1);
  // }
  // await db.write();

  MongoClient.connect(url, (err, client) => {
    const db = client.db(dbName);
    const collection = db.collection("users");
    collection.deleteOne({ _id: ObjectId(req.params.id) });
    res.status(200).json({ msg: "The user was successfully deleted.!" });
  });
};

export const updateUser = async (req, res, next) => {
  // const { users } = db.data;
  // let user = await users.find((v) => v.id === req.params.id);
  // const { firstName, lastName, email, password } = req.body;
  // user.firstName = firstName;
  // user.lastName = lastName;
  // user.email = email;
  // user.password = password;
  // await db.write();

  MongoClient.connect(url, (err, client) => {
    const db = client.db(dbName);
    const collection = db.collection("users");
    collection.updateOne({ _id: ObjectId(req.params.id) }, { $set: req.body });
    res.status(200).json({ msg: "The user was successfully updated.!" });
  });
};

export const addUser = async (req, res, next) => {
  // const { users } = db.data;
  // console.log(users);
  // users.push({ ...req.body, id: Date.now().toString() });
  // await db.write();

  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  };
  MongoClient.connect(url, (err, client) => {
    const db = client.db(dbName);
    const collection = db.collection("users");
    collection.insertOne(user);
    res.status(200).json(user);
  });
};
