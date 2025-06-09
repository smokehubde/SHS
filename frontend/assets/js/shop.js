async function loadProducts() {
  const res = await axios.get('/api/products');
  const list = document.getElementById('product-list');
  res.data.forEach(p => {
    const col = document.createElement('div');
    col.className = 'col-md-4';
    col.innerHTML = `
      <div class="card mb-4">
        <img src="${p.image}" class="card-img-top" alt="${p.name}">
        <div class="card-body">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text">${p.description}</p>
          <p class="card-text">€${p.price.toFixed(2)}</p>
          <button class="btn btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>`;
    list.appendChild(col);
  });
}

async function addToCart(id) {
  await axios.post(`/api/cart/${id}`);
}

loadProducts();
