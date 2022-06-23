import express from "express";
import {
  createUser,
  getUsers,
  deleteUser,
} from "../controllers/userController.js";

import auth from "../middleware/auth.js";

const router = express.Router();

//http://localhost:5000/create-user
router.post("/create-user", createUser);

//http://localhost:5000/getusers
router.get("/getusers", auth, getUsers);

//http://localhost:5000/62a86f7a3946776002ff1bf2
router.delete("/:id", deleteUser);

export default router;
