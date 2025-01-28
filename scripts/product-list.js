   // product-list.js

// Firebase Configuration (Replace with your Firebase config)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
  };
  
  // Initialize Firebase (if not already initialized)
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  // Reference to the Firestore collection
  const db = firebase.firestore();
  const productsRef = db.collection("products");
  
  // DOM Elements
  const productsContainer = document.getElementById("products-container");
  
  // Function to fetch and display products
  async function fetchAndDisplayProducts() {
    try {
      // Fetch products from Firestore
      const snapshot = await productsRef.get();
  
      // Clear the container before adding new products
      productsContainer.innerHTML = "";
  
      // Loop through each product and create a product card
      snapshot.forEach((doc) => {
        const product = doc.data();
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
      productsContainer.innerHTML = "<p>Failed to load products. Please try again later.</p>";
    }
  }
  
  // Function to create a product card
  function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("product-card");
  
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>Price:</strong> $${product.price}</p>
      <button class="btn" onclick="viewProductDetails('${product.id}')">View Details</button>
    `;
  
    return card;
  }
  
  // Function to handle "View Details" button click
  function viewProductDetails(productId) {
    // Redirect to the product detail page with the product ID
    window.location.href = `product-detail.html?id=${productId}`;
  }
  
  // Fetch and display products when the page loads
  window.onload = fetchAndDisplayProducts;