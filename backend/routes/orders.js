const express = require('express');
const router = express.Router();
const orders = require('../models/orders');
const cart = require('../models/cart');
const BitcoinService = require('../services/BitcoinService');

router.post('/', (req, res) => {
    const items = cart.getItems();
    if (!items.length) return res.status(400).json({ error: 'Cart is empty' });
    const bitcoinAddress = BitcoinService.generateAddress();
    const order = orders.createOrder({ items, bitcoinAddress });
    cart.clear();
    res.json(order);
});

router.get('/', (req, res) => {
    res.json(orders.all());
});

module.exports = router;
