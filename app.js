let allProducts = [];
let currency = "USD";
const BDT_RATE = 120;

// ===== STATIC PRODUCTS =====
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
    },
    {
      id: 3,
      title: "Bluetooth Speaker",
      priceUSD: 39.99,
      category: "Electronics",
      image: "https://images-na.ssl-images-amazon.com/images/I/61fzz3L7afL._AC_SL1500_.jpg",
      affiliate: "https://www.amazon.com/dp/B08F4S1YKC/?tag=trendcartbd-20"
    }
  ];

  renderByCategory(allProducts);
}

// ===== RENDER FUNCTION =====
function renderByCategory(products) {
  const electronicsGrid = document.getElementById("electronicsGrid");
  const booksGrid = document.getElementById("booksGrid");
  const clothingGrid = document.getElementById("clothingGrid");

  electronicsGrid.innerHTML = "";
  booksGrid.innerHTML = "";
  clothingGrid.innerHTML = "";

  products.forEach(p => {
    const price =
      currency === "USD" ? `$${p.priceUSD}` : `৳${Math.round(p.priceUSD * BDT_RATE)}`;

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

// ===== CURRENCY TOGGLE =====
window.toggleCurrency = () => {
  currency = currency === "USD" ? "BDT" : "USD";
  renderByCategory(allProducts);
};

// ===== START =====
loadProducts();
