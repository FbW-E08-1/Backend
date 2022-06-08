import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  record: [
    {
      ref: "Record",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const OrderModel = mongoose.model("Order", OrderSchema);

export default OrderModel;
