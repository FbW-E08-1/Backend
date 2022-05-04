exports.getToys = (req, res) => {
  res.send("GET /products/toys");
};

exports.createToy = (req, res) => {
  res.send("POST request");
};

exports.getToy = (req, res) => {
  res.send("Single product!");
};

exports.updateToy = (req, res) => {
  res.send("Update single product!");
};

exports.deleteToy = (req, res) => {
  res.json({ msg: "DELETE a product!" });
};
