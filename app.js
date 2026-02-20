// ====== FIREBASE SETUP ======
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDiMzH9m6Rt5Frnz3MLZXq7dhgs8uVIaww",
  authDomain: "trendcart-104cc.firebaseapp.com",
  projectId: "trendcart-104cc",
  storageBucket: "trendcart-104cc.firebasestorage.app",
  messagingSenderId: "767357155189",
  appId: "1:767357155189:web:6208bd7132c669687ac53c",
  measurementId: "G-1WC7CY24C8"
};

document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("productGrid");
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  }

  let currency = "USD";
  const BDT_RATE = 120;

  async function loadProducts() {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = [];

    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });

    renderProducts(products);
  }

  function renderProducts(products) {
    productGrid.innerHTML = products.map(p => {
      const price =
        currency === "USD"
          ? `$${p.priceUSD}`
          : `৳${Math.round(p.priceUSD * BDT_RATE)}`;

      return `
        <article class="product-card">
          <img src="${p.image}" alt="${p.title}" loading="lazy">
          <h3>${p.title}</h3>
          <p class="price">${price}</p>
          <a href="${p.affiliate}"
             class="buy-btn"
             target="_blank"
             rel="nofollow sponsored noopener">
             View Deal
          </a>
        </article>
      `;
    }).join("");
  }

  window.toggleCurrency = () => {
    currency = currency === "USD" ? "BDT" : "USD";
    loadProducts();
  };

  loadProducts();
});

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
document.addEventListener("DOMContentLoaded", () => {

  const productGrid = document.getElementById("productGrid");
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  }

  let currency = "USD";
  const BDT_RATE = 120;

  async function loadProducts() {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = [];

    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });

    renderProducts(products);
  }

  function renderProducts(products) {
    productGrid.innerHTML = products.map(p => {
      const price =
        currency === "USD"
          ? `$${p.priceUSD}`
          : `৳${Math.round(p.priceUSD * BDT_RATE)}`;

      return `
        <article class="product-card">
          <img src="${p.image}" alt="${p.title}" loading="lazy">
          <h3>${p.title}</h3>
          <p class="price">${price}</p>
          <a href="${p.affiliate}"
             class="buy-btn"
             target="_blank"
             rel="nofollow sponsored noopener">
             View Deal
          </a>
        </article>
      `;
    }).join("");
  }

  window.toggleCurrency = () => {
    currency = currency === "USD" ? "BDT" : "USD";
    loadProducts();
  };

  loadProducts();
});
