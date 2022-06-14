import userModel from "../models/userModel.js";

export const getUsers = async (req, res) => {
  //code here
  try {
    const users = await userModel.find();
    res.status(200).json({ details: users });
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  //code here
  try {
    const user = new userModel(req.body);
    await user.save();
    res.status(200).json({ message: user });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async (req, res) => {
  //code here
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "User deleted!" });
  } catch (error) {
    console.log(error.message);
  }
};
