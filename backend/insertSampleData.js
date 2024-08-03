const mongoose = require('mongoose');
const Product = require('./models/Product');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Connect to the database
const db = process.env.MONGO_URI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const products = [
  {
    name: "Modern Sofa",
    description: "A comfortable and stylish modern sofa.",
    price: 499.99,
    imageUrl: "https://example.com/images/sofa.jpg"
  },
  {
    name: "Wooden Dining Table",
    description: "A large wooden dining table for family meals.",
    price: 299.99,
    imageUrl: "https://example.com/images/dining-table.jpg"
  },
  {
    name: "King Size Bed",
    description: "A luxurious king size bed with a memory foam mattress.",
    price: 799.99,
    imageUrl: "https://example.com/images/bed.jpg"
  }
];

Product.insertMany(products)
  .then(() => {
    console.log('Sample data inserted');
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
