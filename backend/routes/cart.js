const express = require('express');
const router = express.Router();
const cart = require('../models/cart');
const products = require('../models/products');

router.get('/', (req, res) => {
    res.json(cart.getItems());
});

router.post('/:id', (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    cart.addItem(product);
    res.json(cart.getItems());
});

router.delete('/', (req, res) => {
    cart.clear();
    res.json({});
});

module.exports = router;
