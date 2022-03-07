const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/', async (req, res) => {
    const users = await User.find({});
    res.json({
        status: 200,
        data: users,
    })
})

//post 
router.post("/", async (req, res) => {
    const data = req.body;
    const owner = await User.create(data);
    res.json({
      status: 200,
      data: user,
    });
});


//delete user
router.delete('/:id', async (req, res) => {
    const userDeleted = await User.findByIdAndDelete(req.params.id)
    res.json({
        status: 200,
        data: `${user} was deleted!`
    })
})
 
//update user
router.put('/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json({
      status: 200,
      msg: `User: ${user} was updated in the database`
    })
  })
  

module.exports = router;