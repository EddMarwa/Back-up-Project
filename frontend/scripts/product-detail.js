// Hardcoded product data (you can replace this with data from a database in the future)
const products = [
  {
    id: "1",
    name: "Laptop",
    price: "Ksh 40,000",
    description: "This is a second-hand laptop in great condition.",
    image: "./images/laptop.jfif"
  },
  {
    id: "2",
    name: "Smartphone",
    price: "Ksh 15,000",
    description: "A budget-friendly smartphone with a 48MP camera and 128GB storage.",
    image: "./images/smartphone.jfif"
  },
  {
    id: "3",
    name: "Smart Watch",
    price: "Ksh 8,000",
    description: "A stylish smartwatch with fitness tracking features and heart rate monitoring.",
    image: "./images/smartwatch.jfif"
  }
];

// Function to get the product ID from the URL
function getProductId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

// Function to display the product details dynamically
function displayProductDetail() {
  const productId = getProductId(); // Get product id from URL
  const product = products.find(p => p.id === productId); // Find product by id

  if (product) {
    const productContainer = document.getElementById("product-detail-container");
    
    // Create HTML structure with dynamic product data
    productContainer.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.price}</p>
      <p>${product.description}</p>

      <!-- Rent/Buy Buttons -->
      <div class="purchase-options">
        <button class="btn" id="buy-btn">Buy Now</button>
        <button class="btn" id="rent-btn">Rent Now</button>
      </div>

      <!-- Rent Period Input (hidden by default) -->
      <div id="rent-period" class="hidden">
        <label for="rental-days">Rental Period (Days):</label>
        <input type="number" id="rental-days" name="rental-days" placeholder="Enter number of days">
        <button class="btn" id="confirm-rent">Confirm Rent</button>
      </div>
    `;

    // Add event listeners for Rent/Buy buttons
    document.getElementById("buy-btn").addEventListener("click", () => {
      alert("Proceeding to Buy the product.");
      // Add functionality to process the buy now action
    });

    document.getElementById("rent-btn").addEventListener("click", () => {
      document.getElementById("rent-period").classList.remove("hidden"); // Show rent period input
    });

    document.getElementById("confirm-rent").addEventListener("click", () => {
      const rentalDays = document.getElementById("rental-days").value;
      if (rentalDays) {
        alert(`Proceeding to rent the product for ${rentalDays} days.`);
        // Add functionality to process the rent action
      } else {
        alert("Please enter a valid rental period.");
      }
    });
  } else {
    document.getElementById("product-detail-container").innerHTML = "<p>Product not found.</p>";
  }
}

// Call the function when the page loads
window.onload = displayProductDetail;
