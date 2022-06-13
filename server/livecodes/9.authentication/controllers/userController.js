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
    const user = new userModel({
      firstName,
      email,
      password, // "password": 1234
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt); //$sdkjakj23123jk123g12g

    await user.save();

    //Create a payload with user ID and may be firstName
    const payload = {
      user: {
        id: user._id,
        name: user.firstName,
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

export const userLogin = async (req, res) => {
  //Code here
  const { email, password } = req.body;

  try {
    let user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "User Not Exists!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Incorrect Password!" });
    }

    const payload = {
      user: {
        id: user.id,
        name: user.firstName,
      },
    };

    jwt.sign(payload, "randomString", { expiresIn: "1h" }, (err, token) => {
      if (err) throw err;
      res.status(200).json({ token });
    });
  } catch (error) {}
};

export const loggedIn = async (req, res) => {
  //code here
  try {
    const user = await userModel.findById(req.user.id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.json(error.message);
  }
};
