const mongoose = require('./../db/connection')

const addressSchema = new mongoose.Schema({
  streetAddress: String,
  zipCode: String,
  city: String,
  state: String 
})

module.exports = mongoose.model('Address', addressSchema)