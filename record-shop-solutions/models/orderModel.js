import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  record: {
    type: Number,
    required: true,
  },
});

const OrderModel = mongoose.model("Order", OrderSchema);

export default OrderModel;
