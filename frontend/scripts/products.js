document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');
  
    // Sample product data
    const products = [
      { id: 1, name: 'Laptop', price: '$400', image: 'images/laptop.jpg' },
      { id: 2, name: 'Smartphone', price: '$300', image: 'images/phone.jpg' },
      { id: 3, name: 'Headphones', price: '$50', image: 'images/headphones.jpg' },
      { id: 4, name: 'Gaming Console', price: '$250', image: 'images/console.jpg' },
    ];
  
    // Render products
    products.forEach(product => {
      const productCard = `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          <button onclick="viewProduct(${product.id})">View Details</button>
        </div>
      `;
      productGrid.innerHTML += productCard;
    });
  });
  
  // Redirect to product details page
  function viewProduct(productId) {
    // Logic for passing the product ID (e.g., via query parameters)
    window.location.href = `product-detail.html?id=${productId}`;
  }
  