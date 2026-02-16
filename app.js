
const translations = {
  en: {
    tagline: "Trending products people love 🔥",
    search: "Search products...",
    viewDeal: "View Deal",
    currency: "USD / BDT"
  },
  bn: {
    tagline: "মানুষ যেসব পণ্য ভালোবাসে 🔥",
    search: "পণ্য খুঁজুন...",
    viewDeal: "ডিল দেখুন",
    currency: "ডলার / টাকা"
  }
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

  fetch("product.json")
    .then(res => res.json())
    .then(products => renderProducts(products));

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
             rel="nofollow sponsored noopener"
             data-product="${p.title}">
             View Deal
          </a>
        </article>
      `;
    }).join("");
  }

  document.addEventListener("click", e => {
    if (e.target.classList.contains("buy-btn")) {
      const product = e.target.dataset.product;
      console.log("Affiliate Click:", product);
    }
  });

  window.toggleCurrency = () => {
    currency = currency === "USD" ? "BDT" : "USD";
    fetch("product.json")
      .then(res => res.json())
      .then(products => renderProducts(products));
  };

});
