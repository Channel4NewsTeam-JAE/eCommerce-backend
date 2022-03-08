const mongoose = require('../db/connection')

const sellerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  products: {type: mongoose.Schema.Types.ObjectId, ref:'Product'}
    
})

module.exports = mongoose.model('Seller', sellerSchema)