const mongoose = require('./../db/connection')

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    quantity: Number,
    category: String 
})

module.exports = mongoose.model('Product', productSchema)