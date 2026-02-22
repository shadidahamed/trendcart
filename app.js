console.log("app.js loaded");

// ===== FIREBASE IMPORT =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ===== FIREBASE CONFIG =====
const firebaseConfig = {
  apiKey: "{{AIzaSyBMaq24A8pUn9SlTcaPl0TaIPx85nNlCXM}}",
  authDomain: "trendcart-104cc.firebaseapp.com",
  projectId: "trendcart-104cc",
  storageBucket: "trendcart-104cc.firebasestorage.app",
  messagingSenderId: "767357155189",
  appId: "1:767357155189:web:6208bd7132c669687ac53c"
};

// ===== INIT =====
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ===== GLOBAL STATE =====
let allProducts = [];
let currency = "USD";
const BDT_RATE = 120;

// ===== LOAD PRODUCTS =====
function loadProducts() {
  allProducts = [
    {
      id: 1,
      title: "Wireless Headphones",
      priceUSD: 49.99,
      category: "Electronics",
      image: "https://images-na.ssl-images-amazon.com/images/I/81eDpWz0V3L._AC_SL1500_.jpg",
      affiliate: "https://www.amazon.com/dp/B09BF64J55/?tag=trendcartbd-20"
    },
    {
      id: 2,
      title: "Smart Watch",
      priceUSD: 79.99,
      category: "Electronics",
      image: "https://images-na.ssl-images-amazon.com/images/I/71mPpF6CwzL._AC_SL1500_.jpg",
      affiliate: "https://www.amazon.com/dp/B08X4YQZ4L/?tag=trendcartbd-20"
    }
  ];
  renderByCategory(allProducts);
}
// ===== RENDER CATEGORIES =====
function renderByCategory(products) {
  const electronicsGrid = document.getElementById("electronicsGrid");
  const booksGrid = document.getElementById("booksGrid");
  const clothingGrid = document.getElementById("clothingGrid");

  electronicsGrid.innerHTML = "";
  booksGrid.innerHTML = "";
  clothingGrid.innerHTML = "";

  products.forEach(p => {
    const price = currency === "USD" ? `$${p.priceUSD}` : `৳${Math.round(p.priceUSD * BDT_RATE)}`;

    const card = `
      <article class="product-card">
        <img src="${p.image}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p class="price">${price}</p>
        <a href="${p.affiliate}" target="_blank" class="buy-btn">View Deal</a>
      </article>
    `;

    if (p.category === "Electronics") electronicsGrid.innerHTML += card;
    if (p.category === "Books") booksGrid.innerHTML += card;
    if (p.category === "Clothing") clothingGrid.innerHTML += card;
  });
}

// ===== FILTER CATEGORY =====
window.filterByCategory = (cat) => {
  const filtered = allProducts.filter(p => p.category === cat);
  renderProducts(filtered);
};

// ===== RENDER PRODUCTS =====
function renderProducts(products) {
  const productGrid = document.getElementById("productGrid");
  productGrid.innerHTML = "";

  products.forEach(p => {
    const price = currency === "USD" ? `$${p.priceUSD}` : `৳${Math.round(p.priceUSD * BDT_RATE)}`;
    const card = `
      <article class="product-card">
        <img src="${p.image}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p class="price">${price}</p>
        <a href="${p.affiliate}" target="_blank" class="buy-btn">View Deal</a>
      </article>
    `;
    productGrid.innerHTML += card;
  });
}

// ===== SEARCH =====
document.getElementById("searchBox").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = allProducts.filter(p => p.title.toLowerCase().includes(value));
  renderProducts(filtered);
});

// ===== CURRENCY TOGGLE =====
window.toggleCurrency = () => {
  currency = currency === "USD" ? "BDT" : "USD";
  renderProducts(allProducts);
};

// ===== LOGIN & CART PLACEHOLDER =====
window.login = () => alert("Login feature coming soon!");
window.openCart = () => alert("Cart feature coming soon!");

// ===== START =====
loadProducts();
