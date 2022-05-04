const express = require("express");
const {
  getToys,
  createToy,
  getToy,
  updateToy,
  deleteToy,
} = require("../controllers/productsController");

const router = express.Router();

//http://localhost:5000/products/toys

router.route("/toys").get(getToys).post(createToy);

//http://localhost:5000/products/toys/:toyid
router.route("/toys/:toysid").get(getToy).put(updateToy).delete(deleteToy);

module.exports = router;
