let cart = [];
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");

// Add to Cart
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    const product = button.parentElement;
    const name = product.getAttribute("data-name");
    const price = parseFloat(product.getAttribute("data-price"));

    cart.push({ name, price });
    updateCart();
  });
});

// Update Cart
function updateCart() {
  cartCount.textContent = cart.length;
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.addEventListener("click", () => {
      cart.splice(index, 1);
      updateCart();
    });

    li.appendChild(removeBtn);
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
}

// Show Cart
document.getElementById("cart-link").addEventListener("click", (e) => {
  e.preventDefault();
  cartModal.classList.remove("hidden");
});

// Close Cart
closeCart.addEventListener("click", () => {
  cartModal.classList.add("hidden");
});

// Checkout
document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Thank you for shopping at ZeroMart!");
  cart = [];
  updateCart();
  cartModal.classList.add("hidden");
});
