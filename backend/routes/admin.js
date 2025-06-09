const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/auth');
const products = require('../models/products');

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        const token = jwt.sign({ user: 'admin' }, process.env.JWT_SECRET);
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

router.use(auth);

router.post('/products', (req, res) => {
    const id = products.length + 1;
    const product = { id, ...req.body };
    products.push(product);
    res.json(product);
});

router.delete('/products/:id', (req, res) => {
    const idx = products.findIndex(p => p.id == req.params.id);
    if (idx < 0) return res.status(404).json({ error: 'Not found' });
    products.splice(idx, 1);
    res.json({});
});

module.exports = router;
