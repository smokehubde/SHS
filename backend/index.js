require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const i18n = require('i18n');
const app = express();

// i18n configuration
i18n.configure({
    locales: ['en', 'de'],
    directory: __dirname + '/../frontend/locales',
    defaultLocale: 'en',
    objectNotation: true
});

app.use(i18n.init);
app.use(bodyParser.json());

const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/orders');
const adminRoutes = require('./routes/admin');

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
