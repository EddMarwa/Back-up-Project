import { auth, signInWithEmailAndPassword } from './firebase.js';

// Login function
document.getElementById("login-btn").addEventListener("click", function () {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful");
      window.location.href = "product-list.html"; // Redirect to homepage
    })
    .catch((error) => {
      alert(error.message);
    });
});
