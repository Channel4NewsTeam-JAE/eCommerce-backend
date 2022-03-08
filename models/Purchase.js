const mongoose = require('./../db/connection')

const purchaseSchema = new mongoose.Schema({
    totalPrice: Number,
    paid: Boolean,
    products: {type: mongoose.Schema.Types.ObjectId, ref:'Product'}
})

module.exports = mongoose.model('Purchase', purchaseSchema)