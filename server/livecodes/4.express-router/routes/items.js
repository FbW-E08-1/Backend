const express = require("express");

const router = express.Router();

//http://localhost:5000/items/books
router
  .route("/books")
  .get((req, res) => {
    res.send("GET /items/books");
  })
  .post((req, res) => {
    res.send("POST /items/books");
  });

//http://localhost:5000/items/books/:bookid
router
  .route("/books/:bookid")
  .get((req, res) => {
    res.send("GET /items/books/" + req.params.bookid);
  })
  .put((req, res) => {
    res.send("PUT /items/books/" + req.params.bookid);
  });

module.exports = router;
