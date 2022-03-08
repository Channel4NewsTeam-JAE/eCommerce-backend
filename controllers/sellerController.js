const express = require('express');
const Seller = require('./../models/Seller');
const router = express.Router();

router.get('/', async (req, res) => {
    const sellers = await Seller.find({});
    res.json({
        status: 200,
        data: sellers,
    })
})

//post 
router.post("/", async (req, res) => {
    const data = req.body;
    const seller = await Seller.create(data);
    res.json({
      status: 200,
      data: seller,
    });
});


//delete seller

router.delete('/:id', async (req, res) => {
    const sellerDeleted = await Seller.findByIdAndDelete(req.params.id)
    res.json({
        status: 200,
        data: `${sellerDeleted} was deleted!`
    })
})

router.put('/:id', async (req, res) => {
    const seller = await Seller.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json({
      status: 200,
      msg: `Seller: ${seller} was updated in the database`
    })
  })


router.patch('/:id', async (req, res) => {
    const seller = await Seller.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json({
      status: 200,
      msg: `Seller: ${seller} was updated in the database`
    })
  })

module.exports = router;