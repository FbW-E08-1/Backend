import express from "express";
const router = express.Router();

import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/usersController.js";

router.route("/").get(getUsers).post(addUser);

router.route("/:id").get(getUser).delete(deleteUser).put(updateUser);

export default router;
