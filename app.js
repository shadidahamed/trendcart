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

import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const auth = getAuth();
const provider = new GoogleAuthProvider();

document.querySelector(".login-btn").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then(result => alert(`Logged in as ${result.user.displayName}`))
    .catch(err => console.error(err));
});

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
renderByCategory(allProducts); ;
}

function renderByCategory(products) {
  const electronicsGrid = document.getElementById("electronicsGrid");
  const booksGrid = document.getElementById("booksGrid");
  const clothingGrid = document.getElementById("clothingGrid");

  electronicsGrid.innerHTML = "";
  booksGrid.innerHTML = "";
  clothingGrid.innerHTML = "";

  products.forEach(p => {
    const price =
      currency === "USD"
        ? `$${p.priceUSD}`
        : `৳${Math.round(p.priceUSD * BDT_RATE)}`;

    const card = `
      <article class="product-card">
        <img src="${p.image}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p class="price">${price}</p>
        <a href="${p.affiliate}" target="_blank" class="buy-btn">
          View Deal
        </a>
      </article>
    `;

    if (p.category === "Electronics") {
      electronicsGrid.innerHTML += card;
    }

    if (p.category === "Books") {
      booksGrid.innerHTML += card;
    }

    if (p.category === "Clothing") {
      clothingGrid.innerHTML += card;
    }
  });
}

// ===== CATEGORY FILTER =====
window.filterCategory = (category) => {
  const filtered = allProducts.filter(p => p.category === category);
  renderProducts(filtered);
};

// Sub-categories mapping
const subCategories = {
  Electronics: ["Headphones", "Smart Watch", "Speakers"],
  Books: ["Fiction", "Non-Fiction", "Comics"],
  Clothing: ["Men", "Women", "Kids"]
};

// Show sub-categories when a main category is clicked
function showCategory(cat) {
  const container = document.getElementById("subCategoriesContainer");
  container.innerHTML = ""; // clear previous subcategories

  subCategories[cat].forEach(sub => {
    const btn = document.createElement("button");
    btn.textContent = sub;
    btn.onclick = () => showProductsBySubCategory(sub); // show products when sub is clicked
    container.appendChild(btn);
  });
}

// Show only products of that sub-category
function showProductsBySubCategory(subCat) {
  const filtered = allProducts.filter(p => p.subCategory === subCat);
  renderProducts(filtered);
}

// Update your product JSON to include `subCategory`:
[
  {
    "id": 1,
    "title": "Wireless Headphones",
    "priceUSD": 49.99,
    "category": "Electronics",
    "subCategory": "Headphones",
    "image": "🔗[PUT_REAL_IMAGE_URL_HERE]",
    "affiliate": "🔗[PUT_REAL_AMAZON_AFFILIATE_LINK_HERE]"
  }
]

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
renderByCategory(allProducts); ;
};

// ===== START =====
loadProducts();

let cart = [];

document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const productId = e.target.dataset.id;
    const product = allProducts.find(p => p.id == productId);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  });
});
