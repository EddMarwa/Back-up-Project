document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');
  
    // Mock data for products
    const products = [
      { id: 1, name: "Laptop", price: "$400", image: "images/laptop.jpg" },
      { id: 2, name: "Smartphone", price: "$300", image: "images/phone.jpg" },
      { id: 3, name: "Headphones", price: "$50", image: "images/headphones.jpg" },
    ];
  
    // Render product cards
    products.forEach(product => {
      const productCard = `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          <button>Buy Now</button>
        </div>
      `;
      productGrid.innerHTML += productCard;
    });
  });
  