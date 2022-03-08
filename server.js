require('dotenv').config()
const express = require('express')
// const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT

const app = express()
// app.use(logger('dev'));
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin: `http://localhost:3000`,  //react's address
    credentials: true
}));

app.use(express.json())

app.use(express.urlencoded({extended:false}));

const productController = require('./controllers/productController')
app.use('/products', productController)

const purchaseController = require('./controllers/purchaseController')
app.use('/purchases', purchaseController)

const sellerController = require('./controllers/sellerController')
const { urlencoded } = require('express')
app.use('/sellers', sellerController)


app.get('/', function (req, res) {
    res.send('hello, earth!')
})

app.listen(PORT, () => {
    console.log(`Listening in on port: ${PORT}`)
})