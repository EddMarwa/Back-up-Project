document.addEventListener("DOMContentLoaded", () => {
    // Updated mock data
    const products = [
      {
        id: 1,
        name: "Laptop",
        price: 40000,
        description: "A powerful laptop for all your computing needs.",
        image: "images/laptop.jpg",
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
      {
        id: 4,
        name: "Gaming Console",
        price: 25000,
        description: "Experience next-level gaming with this console.",
        image: "images/console.jpg",
      },
    ];
  
    const productListContainer = document.querySelector(".product-list");
  
    // Render product list
    products.forEach((product) => {
      const productItem = `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Ksh ${product.price.toLocaleString()}</p>
          <button onclick="viewProduct(${product.id})">View Details</button>
        </div>
      `;
      productListContainer.innerHTML += productItem;
    });
  
    // View product (redirect to detail page)
    window.viewProduct = (id) => {
      window.location.href = `product-detail.html?id=${id}`;
    };
  });
  