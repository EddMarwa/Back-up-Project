// Initialize Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmIwtSJ4_lOk2V4o06T89fKOGNa6hVVTw",
  authDomain: "backup-1e9ac.firebaseapp.com",
  databaseURL: "https://backup-1e9ac-default-rtdb.firebaseio.com",
  projectId: "backup-1e9ac",
  storageBucket: "backup-1e9ac.firebasestorage.app",
  messagingSenderId: "106435832288",
  appId: "1:106435832288:web:8fcd5d9754738f79982385"
};
firebase.initializeApp(firebaseConfig);

// Firestore and Storage References
const db = firebase.firestore();
const storage = firebase.storage();
const productsCollection = db.collection('products');

// Form Submission Handler
document.getElementById('add-product-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const form = e.target;
  const statusDiv = document.getElementById('upload-status');
  const name = form['product-name'].value;
  const description = form['product-description'].value;
  const price = parseFloat(form['product-price'].value);
  const category = form['product-category'].value;
  const imageFile = form['product-photo'].files[0];

  if (!name || !description || isNaN(price) || !category || !imageFile) {
      statusDiv.textContent = 'All fields are required.';
      statusDiv.className = 'status-message error';
      return;
  }

  try {
      // Upload Image to Firebase Storage
      const imageRef = storage.ref(`products/${Date.now()}_${imageFile.name}`);
      const snapshot = await imageRef.put(imageFile);
      const imageUrl = await snapshot.ref.getDownloadURL();

      // Save Product Details to Firestore
      await productsCollection.add({
          name,
          description,
          price,
          category,
          imageUrl,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });

      statusDiv.textContent = 'Product added successfully!';
      statusDiv.className = 'status-message success';
      form.reset();
  } catch (error) {
      console.error('Error:', error);
      statusDiv.textContent = `Error: ${error.message}`;
      statusDiv.className = 'status-message error';
  }

  // Clear Status Message After 5 Seconds
  setTimeout(() => (statusDiv.textContent = ''), 5000);
});
