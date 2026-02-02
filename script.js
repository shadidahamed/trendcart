let currentLang = localStorage.getItem("lang") || "en";

window.setLang = function (lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyLang();
};

function applyLang() {
  document.querySelector(".hero h1").innerText =
    translations[currentLang].tagline;

  document.getElementById("searchBox").placeholder =
    translations[currentLang].search;

  document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.innerText = translations[currentLang].viewDeal;
  });
}
/* =========================
   TREND CART – MAIN JS
   ========================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- MOBILE MENU ---------- */
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  }

const searchBox = document.getElementById("searchBox");

if (searchBox) {
  searchBox.addEventListener("input", () => {
    fetch("products.json")
      .then(res => res.json())
      .then(products => {
        const value = searchBox.value.toLowerCase();
        const filtered = products.filter(p =>
          p.title.toLowerCase().includes(value)
        );
        renderProducts(filtered);
      });
  });
}

   
  /* ---------- PRODUCT DATA (Affiliate Ready) ---------- */
  const products = [
    {
      title: "Wireless Headphones",
      price: "$49.99",
      image: "https://via.placeholder.com/300",
      link: "https://example.com/affiliate-link-1"
    },
    {
      title: "Smart Watch",
      price: "$79.99",
      image: "https://via.placeholder.com/300",
      link: "https://example.com/affiliate-link-2"
    },
    {
      title: "Bluetooth Speaker",
      price: "$39.99",
      image: "https://via.placeholder.com/300",
      link: "https://example.com/affiliate-link-3"
    }
  ];

  const productGrid = document.getElementById("productGrid");

  if (productGrid) {
    productGrid.innerHTML = products.map(product => `
      <article class="product-card">
        <img src="${product.image}" alt="${product.title}" loading="lazy">
        <h3>${product.title}</h3>
        <p class="price">${product.price}</p>
        <a 
          href="${product.link}" 
          target="_blank" 
          rel="nofollow sponsored noopener"
          class="buy-btn"
          data-product="${product.title}"
        >
          ${translations[currentLang].viewDeal}

        </a>
      </article>
    `).join("");
  }

  /* ---------- CLICK TRACKING ---------- */
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("buy-btn")) {
      const productName = e.target.dataset.product;
      console.log("Affiliate click:", productName);

      // Later you can send this to analytics
      // fetch("/track", { method: "POST", body: productName });
    }
  });

});

