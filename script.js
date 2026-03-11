document.addEventListener("DOMContentLoaded", () => {
  // Highlight clicked category button on homepage
  const categoryButtons = document.querySelectorAll('.category-btn');

  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      categoryButtons.forEach(b => b.classList.remove('active-btn'));

      // Add active class to clicked button
      btn.classList.add('active-btn');
    });
  });

  // Optional: Add click alert on products (for category pages)
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    product.addEventListener('click', () => {
      const productName = product.querySelector('p').textContent;
      alert(`You clicked on ${productName}`);
    });
  });
});