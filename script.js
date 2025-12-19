<script>
  const carts = document.querySelectorAll('.add-to-cart');
  carts.forEach(cart => {
    cart.addEventListener('click', () => {
      const name = cart.dataset.name;
      const price = cart.dataset.price;
      const image = cart.dataset.image;
      console.log(`Added to cart: ${name}, $${price}`);
    });
  });
</script>
