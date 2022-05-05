exports.getOrders = (req, res) => {
  res.status(200).json({ msg: "Order were fetched!!" });
};

exports.createOrder = (req, res) => {
  res.status(201).json({ msg: "Order was created!" });
};
