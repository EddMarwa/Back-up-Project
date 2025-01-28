document.addEventListener('DOMContentLoaded', () => {
  const viewDetailsBtns = document.querySelectorAll('.view-details-btn');

  viewDetailsBtns.forEach(button => {
    button.addEventListener('click', (e) => {
      const productCard = e.target.closest('.product-card');
      productCard.classList.toggle('show-details'); // Show or hide the details overlay

      // Optionally disable the button after it has been clicked to prevent multiple clicks
      e.target.disabled = true;
    });
  });
});
