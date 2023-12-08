let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function displayCart() {
    let cartTable = document.getElementById('cartBody');
    let totalPrice = 0;

    cartTable.innerHTML = "";

    cart.forEach((product, index) => {
      const { image, name, price, quantity } = product;
      const total = price * quantity;
      totalPrice += total;

      cartTable.innerHTML += `
        <tr>
          <td><img src='${image}' alt='${name}' style='width: 50px; height: 50px;'></td>
          <td>${name}</td>
          <td>R${price}</td>
          <td>${quantity}</td>
          <td>R${total}</td>
          <td><button class='remove' data-index='${index}'>Remove</button></td>
        </tr>
      `;
    });

    document.getElementById('totalPrice').textContent = `Total: R${totalPrice.toFixed(2)}`;

    document.querySelectorAll('.remove').forEach(button => {
      button.addEventListener('click', function() {
        removeItem(parseInt(button.getAttribute('data-index')));
      });
    });
  }

  function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }
  document.getElementById('placeOrder').addEventListener('click', placeOrder);

  function placeOrder() {
    alert('Order placed successfully!');
    localStorage.removeItem('cart');
    cart = [];
    displayCart();
  }
  displayCart();