document.addEventListener("DOMContentLoaded", function() {
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

  const productsContainer = document.querySelector('.products-container');

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Ksh ${product.price.toLocaleString()}</p>
      <a href="product-detail.html?id=${product.id}" class="btn">View Details</a>
    `;
    productsContainer.appendChild(productCard);
  });
});
