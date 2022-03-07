const mongoose = require('../db/connection')

const sellerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  Email: String,
  Products: {type: Schema.Types.ObjectId, ref:'Product'}
    
})

module.exports = mongoose.model('Seller', sellerSchema)