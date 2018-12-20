const express = require("express");
const Router = express.Router;
const router = Router();
const Product = require("../models/product");
const { verifyToken } = require("../middleware/auth");

router.get("/", verifyToken, (req, res) => {
  const { user } = req.decoded;
  Product.find({ user: user.id })
    .then(docs => {
      res.status(200).send({
        message: "success",
        payload: docs
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
});

router.post("/", verifyToken, (req, res) => {
  const { description } = req.body
  const { user } = req.decoded
  const product = new Product({
    description,
    user: user.id
  });
  product
    .save()
    .then(doc => {
      res.status(200).send({ message: "success", payload: doc });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
});

module.exports = router;
