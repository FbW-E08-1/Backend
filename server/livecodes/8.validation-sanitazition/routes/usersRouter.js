import express from "express";
import { body } from "express-validator";

import { createUser, getUsers } from "../controllers/userControllers.js";
const router = express.Router();

//GET request
router.get("/", getUsers);

//POSt request
router.post(
  "/create-user",
  [
    body("firstName").notEmpty().withMessage("First name is required").trim(),
    body("email", "Email is required").isEmail().normalizeEmail(),
    body("password", "Password is required and length min 4 chars.")
      .isLength({ min: 4 })
      .custom((val, { req }) => {
        if (val !== req.body.confirm_password) {
          throw new Error("Password don't match!");
        } else {
          return val;
        }
      }),
  ],
  createUser,
);

export default router;
