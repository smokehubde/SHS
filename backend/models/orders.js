let orders = [];
module.exports = {
    createOrder: (data) => {
        const id = orders.length + 1;
        const order = { id, ...data, status: 'pending' };
        orders.push(order);
        return order;
    },
    markPaid: (id) => {
        const order = orders.find(o => o.id === id);
        if (order) order.status = 'paid';
    },
    all: () => orders
};
