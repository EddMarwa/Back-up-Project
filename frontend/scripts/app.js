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
  // Static product data (for demonstration)
const products = [
  {
    id: 1,
    name: 'Second Hand Phone',
    image: '../images/phone.jpg',
    price: 15000,
  },
  {
    id: 2,
    name: 'Laptop Bag',
    image: '../images/bag.jpg',
    price: 3500,
  },
  {
    id: 3,
    name: 'Used Bookshelf',
    image: '../images/bookshelf.jpg',
    price: 5000,
  },
  // Add more products here
];

// Function to render products
function renderProducts() {
  const productsContainer = document.getElementById('products-container');

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>Price: Ksh ${product.price}</p>
      <a href="../checkout/checkout.html?product_id=${product.id}&type=buy&price=${product.price}" class="btn">Buy Now</a>
      <a href="../checkout/checkout.html?product_id=${product.id}&type=rent&price=${product.price}" class="btn rent">Rent Now</a>
    `;

    productsContainer.appendChild(productCard);
  });
}

// Call the function to render products
renderProducts();

  