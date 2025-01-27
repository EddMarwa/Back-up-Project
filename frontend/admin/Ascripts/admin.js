// Simulate fetching existing products from a database
const products = [
    { name: "Product 1", price: 100, category: "Electronics" },
    { name: "Product 2", price: 200, category: "Clothing" },
  ];

  const productListContainer = document.getElementById('product-list');
  
  // Render existing products dynamically
  products.forEach(product => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td>${product.category}</td>
      <td><button>Edit</button><button>Delete</button></td>
    `;
    productListContainer.appendChild(row);
  });

  // Handle form submission for adding new products
  document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('product-name').value;
    const description = document.getElementById('product-description').value;
    const price = document.getElementById('product-price').value;
    const image = document.getElementById('product-image').value;
    const category = document.getElementById('product-category').value;

    // Simulate adding the product to the database (you'll need backend logic for this)
    products.push({ name, description, price, image, category });

    // Add the new product to the table
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${price}</td>
      <td>${category}</td>
      <td><button>Edit</button><button>Delete</button></td>
    `;
    productListContainer.appendChild(newRow);

    // Clear the form fields
    document.getElementById('add-product-form').reset();
  });

  
document.getElementById("upload-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const fileInput = document.getElementById("product-photo");
    const file = fileInput.files[0];
  
    if (!file) {
      alert("Please select a photo to upload.");
      return;
    }
  
    const formData = new FormData();
    formData.append("image", file);
  
    // Show status message
    document.getElementById("upload-status").textContent = "Uploading...";
  
    // Send to backend (Node.js or Firebase)
    fetch("/upload", { // The URL endpoint on your server that handles file uploads
      method: "POST",
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        document.getElementById("upload-status").textContent = "Upload Successful!";
        console.log("Image uploaded:", data.imageUrl); // Get the uploaded image URL
      } else {
        document.getElementById("upload-status").textContent = "Upload Failed. Try Again.";
        console.error("Upload error:", data.message);
      }
    })
    .catch(error => {
      document.getElementById("upload-status").textContent = "An error occurred.";
      console.error("Error:", error);
    });
  });
  
  const express = require("express");
const multer = require("multer");
const firebaseAdmin = require("firebase-admin");
const path = require("path");

// Initialize Firebase Admin SDK
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.applicationDefault(),
  storageBucket: "your-app-id.appspot.com", // Replace with your Firebase project bucket
});

const app = express();
const port = 3000;

// Configure multer for file uploads
const storage = multer.memoryStorage(); // Store file in memory
const upload = multer({ storage: storage });

// Upload Route
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    // Generate a unique file name
    const fileName = `${Date.now()}_${path.extname(req.file.originalname)}`;
    
    // Upload image to Firebase Storage
    const bucket = firebaseAdmin.storage().bucket();
    const fileUpload = bucket.file(fileName);
    
    await fileUpload.save(req.file.buffer, {
      contentType: req.file.mimetype,
      public: true,
    });

    // Get the public URL of the uploaded image
    const imageUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;

    // Save image URL in the database (e.g., Firebase Firestore or MySQL)
    // For Firebase Firestore:
    const db = firebaseAdmin.firestore();
    await db.collection("products").add({
      imageUrl: imageUrl,
      createdAt: firebaseAdmin.firestore.FieldValue.serverTimestamp(),
    });

    res.json({ success: true, imageUrl: imageUrl });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
const user = firebase.auth().currentUser;
if (user && user.email === "admin@example.com") {
  // Allow upload
} else {
  // Redirect or show an error message
}


    
