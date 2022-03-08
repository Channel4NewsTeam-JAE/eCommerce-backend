const express = require('express');
const Product = require('./../models/Product');
const router = express.Router();


//get route
router.get("/", async (req, res) => {
    const products = await Product.find({});
    res.json({
      status: 200,
      data: products,
    });
  });


// create product

// router.post("/", async (req, res) => {
//   const data = req.body;
//   const newProduct = await Seller.create(data);
//   res.json({
//     status: 200,
//     data: newProduct,
//   });
// });

//delete
// router.delete('/:id', async (req, res) => {
//     const product = await Product.findByIdAndDelete(req.params.id)
//     res.json({
//       status: 200,
//       msg: `${product} was deleted from the list!`
//     })
//   })

//update product
// router.put('/:id', async (req, res) => {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
//     res.json({
//       status: 200,
//       msg: `Update: ${product}} was updated in the database`
//     })
//   })
module.exports = router;