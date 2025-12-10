// Ambil elemen
const username = document.querySelector('input[type="text"]');
const password = document.querySelector('input[type="password"]');
const loginBtn = document.querySelector(".login-btn");
const toggleIcon = document.querySelectorAll(".icon")[1];

toggleIcon.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    toggleIcon.textContent = "🙈";
  } else {
    password.type = "password";
    toggleIcon.textContent = "👁️";
  }
});

function showPopup(message) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("popup-text").textContent = message;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (username.value === "" || password.value === "") {
    showPopup("Username dan Password tidak boleh kosong!");
  } else {
    showPopup("Login berhasil, " + username.value + "!");
    window.location.href = "toko.html";
  }
});
