document.addEventListener("DOMContentLoaded", () => {
    // Updated mock data
    const products = {
      1: {
        name: "Laptop",
        price: 40000,
        description: "A powerful laptop for all your computing needs.",
        image: "images/laptop.jpg",
      },
      2: {
        name: "Smartphone",
        price: 30000,
        description: "A sleek smartphone with all the latest features.",
        image: "images/phone.jpg",
      },
      3: {
        name: "Headphones",
        price: 5000,
        description: "High-quality headphones with great sound.",
        image: "images/headphones.jpg",
      },
      4: {
        name: "Gaming Console",
        price: 25000,
        description: "Experience next-level gaming with this console.",
        image: "images/console.jpg",
      },
    };
  
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
  
    if (products[productId]) {
      const product = products[productId];
      document.getElementById("productName").textContent = product.name;
      document.getElementById("productPrice").textContent = `Price: Ksh ${product.price.toLocaleString()}`;
      document.getElementById("productDescription").textContent = `Description: ${product.description}`;
      document.getElementById("productImage").src = product.image;
    } else {
      alert("Product not found!");
      window.location.href = "product-list.html";
    }
  
    document.getElementById("addToCartButton").addEventListener("click", () => {
      alert("Product added to cart!");
    });
  
    document.getElementById("rentProductButton").addEventListener("click", () => {
      alert("Product rented successfully!");
    });
  });
  