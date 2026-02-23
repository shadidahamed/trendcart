const BDT_RATE = 120;
let currentTheme = localStorage.getItem("theme") || "light";

if(currentTheme === "dark"){
  document.body.classList.add("dark");
}

const products = [
  {
    category: "electronics",
    sub: "gaming",
    title: "Gaming Headset",
    price: 49.99,
    image: "(PUT IMAGE URL HERE)",
    link: "(PUT YOUR AMAZON AFFILIATE LINK HERE)"
  },
  {
    category: "books",
    sub: "manga",
    title: "Popular Manga Volume 1",
    price: 15.99,
    image: "(PUT IMAGE URL HERE)",
    link: "(PUT YOUR AMAZON AFFILIATE LINK HERE)"
  },
  {
    category: "clothing",
    sub: "men",
    title: "Men Casual Shirt",
    price: 25.99,
    image: "(PUT IMAGE URL HERE)",
    link: "(PUT YOUR AMAZON AFFILIATE LINK HERE)"
  }
];

function renderProducts(category, sub=null){
  const grid = document.getElementById(category+"Grid");
  grid.innerHTML = "";

  products
  .filter(p => p.category === category)
  .filter(p => sub ? p.sub === sub : true)
  .forEach(p => {

    const bdt = Math.round(p.price * BDT_RATE);

    grid.innerHTML += `
      <div class="product-card">
        <img src="${p.image}">
        <h3>${p.title}</h3>
        <p>৳${bdt}  ($${p.price})</p>
        <a class="buy-btn" href="${p.link}" target="_blank">
        Buy on Amazon
        </a>
      </div>
    `;
  });
}

function showCategory(cat){
  document.querySelectorAll(".category-section")
  .forEach(sec => sec.classList.add("hidden"));

  document.getElementById(cat+"Section")
  .classList.remove("hidden");

  renderProducts(cat);
}

function filterSub(cat, sub){
  renderProducts(cat, sub);
}

/* SEARCH */
document.getElementById("searchBtn").addEventListener("click",()=>{
  const query = document.getElementById("searchInput").value.trim();
  if(!query) return;
  window.open(`https://www.amazon.com/s?k=${query.replace(/\s+/g,"+")}&tag=(PUT YOUR AFFILIATE TAG HERE)`);
});

/* SETTINGS */
document.getElementById("settingsBtn").addEventListener("click",()=>{
  document.getElementById("settingsPanel").classList.toggle("hidden");
});

/* DARK MODE */
document.getElementById("toggleTheme").addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark":"light"
  );
});

/* START */
showCategory("electronics");
