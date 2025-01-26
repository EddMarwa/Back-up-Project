// Sample array of products
const products = [
  {
    id: 1,
    name: "Product 1",
    image: "images/product1.jpg",
    price: 40000
  },
  {
    id: 2,
    name: "Product 2",
    image: "images/product2.jpg",
    price: 30000
  },
  {
    id: 3,
    name: "Product 3",
    image: "images/product3.jpg",
    price: 25000
  }
];

// Function to render products on the page
function renderProducts() {
  const productsContainer = document.getElementById('products-container');

  // Loop through products and create HTML for each
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    // Add product content
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: Ksh ${product.price}</p>
      <a href="checkout.html?product_id=${product.id}&type=buy&price=${product.price}" class="btn">Buy Now</a>
      <a href="checkout.html?product_id=${product.id}&type=rent&price=${product.price}" class="btn">Rent Now</a>
    `;

    // Append the product card to the container
    productsContainer.appendChild(productCard);
  });
}

// Call the function to render products when the page loads
window.onload = renderProducts;
