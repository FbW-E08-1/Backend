import identifierModel from "../models/identifierModel.js";

export const getIdentifier = async (req, res) => {
  try {
    const result = await identifierModel
      .find()
      .populate("user", "-__v -password")
      .select("-__v");
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

export const createIdentifier = async (req, res) => {
  const user = req.body;

  try {
    const newIdentifier = new identifierModel(user);
    await newIdentifier.save();
    res.status(201).json(newIdentifier);
  } catch (error) {
    res.status(409).json({ msg: error.message });
  }
};
