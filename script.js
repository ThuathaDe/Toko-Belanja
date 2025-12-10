const cart = [];

// Tambah item ke keranjang
function addToCart(name, price) {
  cart.push({ name, price });
  updateCartUI();
}

// Update tampilan keranjang
function updateCartUI() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    total += item.price;

    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <span>${item.name}</span>
      <span>Rp ${item.price.toLocaleString()}</span>
    `;
    cartItems.appendChild(div);
  });

  cartTotal.textContent = "Rp " + total.toLocaleString();
}

// Semua tombol produk
document.getElementById("addCartKopi").onclick = () =>
  addToCart("Kopi Bubuk 250g", 32000);
document.getElementById("addCartRoti").onclick = () =>
  addToCart("Roti Tawar", 12000);
document.getElementById("addCartMinyak").onclick = () =>
  addToCart("Minyak Goreng 1L", 24000);
document.getElementById("addCartSusu").onclick = () =>
  addToCart("Susu UHT 1L", 27000);
document.getElementById("addCartIndomie").onclick = () =>
  addToCart("Indomie Goreng", 3500);
document.getElementById("addCartGula").onclick = () =>
  addToCart("Gula Pasir 1kg", 12000);
document.getElementById("addCartMouse").onclick = () =>
  addToCart("Mouse Wireless", 75000);
document.getElementById("addCartKeyboard").onclick = () =>
  addToCart("Keyboard Mechanical", 150000);
document.getElementById("addCartHeadset").onclick = () =>
  addToCart("Headset Gaming", 200000);

// Tombol checkout
document.getElementById("checkoutBtn").onclick = checkout;

// Fungsi checkout
function checkout() {
  if (cart.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }

  let summary = "=== RINGKASAN BELANJA ===\n\n";
  let total = 0;

  cart.forEach((item, i) => {
    summary += `${i + 1}. ${item.name} - Rp ${item.price.toLocaleString()}\n`;
    total += item.price;
  });

  summary += `\nTotal Pembayaran: Rp ${total.toLocaleString()}`;
  summary += "\n\nTerima kasih telah berbelanja!";

  alert(summary);

  cart.length = 0;
  updateCartUI();
}

function createBelanja() {
  const belanja = document.createElement("div");
  belanja.classList.add("belanja");
  belanja.innerHTML = "🛒";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = 15 + Math.random() * 20 + "px";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createBelanja, 500);
