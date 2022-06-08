import mongoose from "mongoose";
import { userSchema } from "./userModel.js";

const Identifier = mongoose.Schema({
  cardCode: String,
  user: userSchema,
});

const identifierModel = mongoose.model("Identifier", Identifier);

export default identifierModel;
