document.addEventListener("DOMContentLoaded", function() {
  // Get the product ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  // Mock product data
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 40000,
      description: "A powerful laptop for all your computing needs.",
      image: "images/laptop.jfif",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 30000,
      description: "A sleek smartphone with all the latest features.",
      image: "images/phone.jpg",
    },
    {
      id: 3,
      name: "Headphones",
      price: 5000,
      description: "High-quality headphones with great sound.",
      image: "images/headphones.jpg",
    },
  ];

  // Find the product based on the ID
  const product = products.find(p => p.id == productId);

  const productDetailContainer = document.querySelector('.product-detail-container');
  if (product) {
    productDetailContainer.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p><strong>Ksh ${product.price.toLocaleString()}</strong></p>
    `;
  } else {
    productDetailContainer.innerHTML = "<p>Product not found.</p>";
  }

  // Handle Add to Cart button click
  const addToCartBtn = document.getElementById('add-to-cart-btn');
  addToCartBtn.addEventListener('click', () => {
    alert(`${product.name} has been added to your cart!`);
  });
});
