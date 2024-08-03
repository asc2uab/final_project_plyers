const express = require('express');
const Product = require('../models/Product');
const auth = require('../middleware/auth');

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).send('Server error');
  }
});

// Add a new product
router.post('/', auth, async (req, res) => {
  const { name, description, price, age, photo, username } = req.body;

  try {
    const newProduct = new Product({ name, description, price, age, photo, username });
    await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    console.error('Error adding product:', error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
