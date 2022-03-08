const express = require('express');
const Purchase = require('../models/Purchase');
const router = express.Router();

//get purchase history
router.get('/', async (req, res) => {
    const purchaseHistory = await Purchase.find({});
    res.json({
        status: 200,
        data: purchaseHistory,
    })
})

router.delete('/:id', async (req, res) => {
    const purchase = await Purchase.findByIdAndDelete(req.params.id)
    res.json({
      status: 200,
      msg: `${purchase} was deleted from the list!`
    })
  })

router.post("/", async (req, res) => {
    const data = req.body;
    console.log("DATA: ", data)
    const purchase = await Purchase.create(data);
    res.json({
      status: 200,
      data: purchase,
    });
    console.log(purchase)
  });

router.put('/:id', async (req, res) => {
    const purchase = await Purchase.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json({
      status: 200,
      msg: `Purchase: ${purchase} was updated in the database`
    })
  })
module.exports = router;