
document.addEventListener("DOMContentLoaded", () => {
    const showSignup = document.getElementById("showSignup");
    const showLogin = document.getElementById("showLogin");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
  
    showSignup.addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("hidden");
      signupForm.classList.remove("hidden");
    });
  
    showLogin.addEventListener("click", (e) => {
      e.preventDefault();
      signupForm.classList.add("hidden");
      loginForm.classList.remove("hidden");
    });
  });