const mongoose = require('./../db/connection')

const userSchema = new mongoose.Schema({
    firstName: String, 
    lastName: String,
    email: String,
    address: {type: Schema.Types.ObjectId, ref:'Address'}
    
})

module.exports = mongoose.model('User', userSchema)