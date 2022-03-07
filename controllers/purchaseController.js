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


module.exports = router;