// ===== FIREBASE IMPORT =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ===== FIREBASE CONFIG =====
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
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
async function loadProducts() {
  const snapshot = await getDocs(collection(db, "products"));
  allProducts = snapshot.docs.map(doc => doc.data());
  renderProducts(allProducts);
}

// ===== RENDER =====
function renderProducts(products) {
  const grid = document.getElementById("productGrid");

  grid.innerHTML = products.map(p => {
    const price =
      currency === "USD"
        ? `$${p.priceUSD}`
        : `৳${Math.round(p.priceUSD * BDT_RATE)}`;

    return `
      <article class="product-card">
        <img src="${p.image}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p class="price">${price}</p>
        <a href="${p.affiliate}" target="_blank" class="buy-btn">
          View Deal
        </a>
      </article>
    `;
  }).join("");
}

// ===== CATEGORY FILTER =====
window.filterCategory = (category) => {
  const filtered = allProducts.filter(p => p.category === category);
  renderProducts(filtered);
};

// ===== SEARCH =====
document.addEventListener("input", (e) => {
  if (e.target.id === "searchBox") {
    const value = e.target.value.toLowerCase();

    const filtered = allProducts.filter(p =>
      p.title.toLowerCase().includes(value)
    );

    renderProducts(filtered);
  }
});

// ===== CURRENCY TOGGLE =====
window.toggleCurrency = () => {
  currency = currency === "USD" ? "BDT" : "USD";
  renderProducts(allProducts);
};

// ===== START =====
loadProducts();
