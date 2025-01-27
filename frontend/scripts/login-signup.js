// Select the elements
const showSignupButton = document.getElementById("show-signup");
const showLoginButton = document.getElementById("show-login");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

// Handle toggling between login and signup forms
showSignupButton.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Showing Sign Up Form");
  loginForm.style.display = "none";
  signupForm.style.display = "block";
});

showLoginButton.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Showing Login Form");
  signupForm.style.display = "none";
  loginForm.style.display = "block";
});
  