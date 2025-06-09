let token = '';
const loginForm = document.getElementById('login-form');
const productForm = document.getElementById('product-form');
const adminSection = document.getElementById('admin-section');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(loginForm));
  const res = await axios.post('/api/admin/login', data);
  token = res.data.token;
  loginForm.style.display = 'none';
  adminSection.style.display = 'block';
});

productForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(productForm));
  await axios.post('/api/admin/products', data, { headers: { 'Authorization': token } });
  alert('Product added');
});
