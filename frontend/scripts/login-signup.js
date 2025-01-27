// Select the elements
const showSignupButton = document.getElementById("show-signup");
const showLoginButton = document.getElementById("show-login");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

// Handle toggling between login and signup forms
showSignupButton.addEventListener("click", function(event) {
  event.preventDefault();
  loginForm.style.display = "none";
  signupForm.style.display = "block";
});

showLoginButton.addEventListener("click", function(event) {
  event.preventDefault();
  signupForm.style.display = "none";
  loginForm.style.display = "block";
});

// Firebase setup
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login function
document.getElementById("login-btn").addEventListener("click", function() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Login successful");
      window.location.href = "index.html"; // Redirect to homepage
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Sign-up function
document.getElementById("signup-btn").addEventListener("click", function() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const name = document.getElementById("signup-name").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("Sign-up successful");
      window.location.href = "index.html"; // Redirect to homepage
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Social media login buttons (Google)
document.getElementById("google-login").addEventListener("click", function() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      alert("Google login successful");
      window.location.href = "index.html"; // Redirect to homepage
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Show sign-up form
document.getElementById("show-signup").addEventListener("click", function() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
});

// Show login form
document.getElementById("show-login").addEventListener("click", function() {
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
});
