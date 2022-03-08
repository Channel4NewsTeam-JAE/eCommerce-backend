const Products = require('./../models/Product.js');
const seedData = require('./seedData.json');


const seedDatabase = async () => {
    await Products.deleteMany({});
    await Products.insertMany(seedData);
    console.log('added data');
    process.exit();
}

seedDatabase();