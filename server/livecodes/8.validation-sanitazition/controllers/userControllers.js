import userModel from "../models/userModel.js";

import { validationResult } from "express-validator";

export const getUsers = async (req, res) => {
  try {
    const result = await userModel.find().select("firstName").sort("firstName");
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (req, res) => {
  const user = req.body;

  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array().map((err) => err.msg),
      });
    }

    const newUser = new userModel(user);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ msg: error.message });
  }
};
