let cart = [];
module.exports = {
    getItems: () => cart,
    addItem: (product) => {
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ ...product, qty: 1 });
        }
    },
    clear: () => { cart = []; }
};
