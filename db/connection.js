const mongoose = require('mongoose')

let mongooseURL = ""

if (process.env.NODE_ENV === "production") {
  mongooseURL = process.env.DB_URL
} else {
  mongooseURL = "mongodb://127.0.0.1/eCommerce-backend"
}

mongoose.connect(mongooseURL)
// mongoose.connect("mongodb://localhost/vinyl-api")

module.exports = mongoose