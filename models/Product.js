const mongoose = require('./../db/connection')

const productSchema = new mongoose.Schema({
    name: String,
    price: Number 
})

module.exports = mongoose.model('Product', productSchema)