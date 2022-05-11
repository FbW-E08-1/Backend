import express from "express";
const router = express.Router();

import {
  addOrder,
  deleteOrder,
  getOrder,
  getOrders,
  updateOrder,
} from "../controllers/ordersController.js";

router.route("/").get(getOrders).post(addOrder);

router.route("/:id").get(getOrder).delete(deleteOrder).put(updateOrder);

export default router;
