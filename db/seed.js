const Products = require('./../models/Product.js');
const seedData = require('./seedData.json');


const seedDatabase = async () => {
    await Gifs.deleteMany({});
    await Gifs.insertMany(seedData);
    console.log('added data');
    process.exit();
}

seedDatabase();