// login-signup.js
import { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, setDoc, doc, Timestamp } from './firebase.js';

// Sign up function
document.getElementById("signup-btn").addEventListener("click", function() {
  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed up:", user);
      alert("Sign-up successful");

      // Store additional user data (username, email, created timestamp) in Firestore
      setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
        timeCreated: Timestamp.now(),
      })
      .then(() => {
        console.log("User data saved to Firestore");
      })
      .catch((error) => {
        console.error("Error storing user data in Firestore:", error);
      });

      window.location.href = "product-list.html"; // Redirect to homepage
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Login function
document.getElementById("login-btn").addEventListener("click", function() {
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
