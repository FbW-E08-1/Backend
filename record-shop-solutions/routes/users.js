import express from "express";
import { userRules } from "../lib/validation/userRules.js";
import { validateInputs } from "../middleware/validator.js";

const router = express.Router();

import {
  addUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/usersController.js";

router.route("/").get(getUsers).post(validateInputs(userRules), addUser);

router.route("/:id").get(getUser).delete(deleteUser).put(updateUser);

export default router;
