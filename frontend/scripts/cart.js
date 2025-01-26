document.addEventListener("DOMContentLoaded", () => {
    // Mock cart data
    let cart = [
      { id: 1, name: "Laptop", price: 40000, quantity: 1, image: "images/laptop.jpg" },
      { id: 2, name: "Headphones", price: 5000, quantity: 2, image: "images/headphones.jpg" },
    ];
  
    const cartItemsContainer = document.querySelector(".cart-items");
    const cartTotalElement = document.getElementById("cartTotal");
  
    // Function to render cart items
    function renderCart() {
      cartItemsContainer.innerHTML = "";
      let total = 0;
  
      cart.forEach((item) => {
        total += item.price * item.quantity;
  
        const cartItem = `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
              <h4>${item.name}</h4>
              <p>Ksh ${item.price} x ${item.quantity}</p>
            </div>
            <div class="cart-item-controls">
              <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
          </div>
        `;
        cartItemsContainer.innerHTML += cartItem;
      });
  
      cartTotalElement.textContent = `Ksh ${total.toLocaleString()}`;
    }
  
    // Function to remove an item from the cart
    window.removeFromCart = (id) => {
      cart = cart.filter((item) => item.id !== id);
      renderCart();
    };
  
    // Render the cart on page load
    renderCart();
  
    // Checkout button (placeholder functionality)
    document.getElementById("checkoutButton").addEventListener("click", () => {
      alert("Proceeding to checkout...");
    });
  });
  