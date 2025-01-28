import { auth, db, createUserWithEmailAndPassword, setDoc, doc, Timestamp } from './firebase.js';

// Sign up function
document.getElementById("signup-btn").addEventListener("click", function () {
  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User signed up:", user);

      // Store additional user data (username, email, created timestamp) in Firestore
      setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
        timeCreated: Timestamp.now(),
      })
        .then(() => {
          console.log("User data saved to Firestore");
          alert("Sign-up successful. Please log in.");
          window.location.href = "login.html"; // Redirect to login page
        })
        .catch((error) => {
          console.error("Error storing user data in Firestore:", error);
        });
    })
    .catch((error) => {
      alert(error.message);
    });
});
