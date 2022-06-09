import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const userSignup = async (req, res) => {
  //Code here

  const { firstName, email, password } = req.body;

  try {
    //Check if user already exisists
    let existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User Already Exists!" });
    }

    //Create a new user
    const newUser = new userModel({
      firstName,
      email,
      password, // "password": 1234
    });

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    await newUser.save();

    //Create a payload with user ID and may be firstName
    const payload = {
      newUser: {
        id: newUser._id,
        name: newUser.firstName,
        msg: "Hello Wojtek!",
      },
    };

    jwt.sign(payload, "randomString", { expiresIn: "1h" }, (err, token) => {
      if (err) throw err;
      res.status(200).json({ token });
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
