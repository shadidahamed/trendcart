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
    price: 99.97 ,
    image: "https://m.media-amazon.com/images/I/81+R+a2MIQL._SL1500_.jpg",
    link: "https://www.amazon.com/Gachiakuta-9-Book-Complete-Collection-Book/dp/B0DKVXCXF5?crid=25GS112ES3HCB&dib=eyJ2IjoiMSJ9.b3o8tZfIp2vhPDHLgChtT9B4C7JX_JAd41oIFzrBeasWzU8GRuox_wd5nW5Z-XTP7yld_jl-DlvGb8msF9x2TcbW1efItJkWRH2VVodP8SVMmyFe6OVP4NsqHNDC5Lb9CBP6n3DP5ewHtpcES8rwtVJN9XRFWRPnRVSLAFusHN4oALqVi19rlDv2cW8ro9Z2Kuq0lxhD3WS5MPzzuyvnGxO5hanx51cPGMyEF5e7UQU.pB6nyypYSAf5XXpmjz83yj8YVcOYK3RZqjxLxxYXa0g&dib_tag=se&keywords=manga+gachiakuta+set&qid=1771856327&sprefix=manga+gachi%2Caps%2C355&sr=8-1&linkCode=ll2&tag=trendcartbd-20&linkId=1da5fe09ad65ed694e2217a8da0b71b3&language=en_US&ref_=as_li_ss_tl"
  }
,
   {
    category: "books",
    sub: "manga",
    title: "Popular Manga Volume 2",
    price: 245.00 ,
    image: "https://m.media-amazon.com/images/I/813xQsPvyRL._SL1500_.jpg",
    link: "https://www.amazon.com/Leveling-Manga-Collection-Books-Chugong/dp/1637995164?crid=1FTETXUULDNBI&dib=eyJ2IjoiMSJ9.X0BOOuAzK7WeORDt3jih945NuiUC_TW3OBZLvSECoDMoFerZ3Vq9dOCIO8_zRF9NiRKQCO8Jdx-rxPw9qYb2mzTx6WlzQnqf-yJPWHrVWx6isb3BSjAEyX0KBoDeX8Wtq3JC0XOAydC0QOT7VaHVs17Wz5CRnMG377IAAeGe7n-MOawRujdQ0mhNBc9C5gkv_AvVuY9lu_wuKT-oQOBi1Cs960JlY-pKcyoIE6jeXH4.LiSIWWCop1HEO2IwzFowBX-zWE0eGESUT_mvIMPrZxw&dib_tag=se&keywords=manga+solo+leveling+box+set&qid=1771856535&sprefix=manga+solo%2Caps%2C350&sr=8-1&linkCode=ll2&tag=trendcartbd-20&linkId=2ea5a632e15634d1e197cfc62b78228e&language=en_US&ref_=as_li_ss_tl"
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
