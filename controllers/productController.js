const express = require('express');
const Product = require('./../models/Prodcuts');
// const router = express.Router();


//get route
router.get("/", async (req, res) => {
    const products = await Product.find({});
    res.json({
      status: 200,
      data: products,
    });
  });

//delete
router.delete('/:id', async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    res.json({
      status: 200,
      msg: `${product} was deleted from the list!`
    })
  })

module.exports = router;