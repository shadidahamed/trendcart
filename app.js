let allProducts = [];
let currency = "USD";
const BDT_RATE = 120;

function loadProducts() {
  allProducts = [
    {
      id: 1,
      title: "Wireless Headphones",
      priceUSD: 18.99,
      category: "Electronics",
      image: "https://m.media-amazon.com/images/I/71Hx8b6HGbL._AC_SL1500_.jpg",
      affiliate: "https://www.amazon.com/Bluetooth-Headphones-KVIDIO-Microphone-Lightweight/dp/B09BF64J55?crid=1JFKZHF32XMLN&dib=eyJ2IjoiMSJ9.iUiT5ZutSPLrCAX_yIx8Es2jDEh2bmniVV_1GkL8Crv6_LGbQi-iB-dVEcT_HG3t-c507Leybg8Z-XhTa-pRWrLGgD-CVpLJsL5blMGkSdKjQk5euQs3MW8RYu4oNbAahwKKsTydPTdaoZNs7u-C54SbtsJCAutrGtMn1z4nDK5aK797WWxlot7Rql4iWj2jzAPDEaX0dItCDu98NLhVu-o5QL8GXjOuFcLbQK_pSUA.hjtxnF2Jw0h2GImc8grGzqT4jIBDRRXXsLHmahFwjRY&dib_tag=se&keywords=wireless%2Bheadphones&qid=1771773391&sprefix=wire%2Caps%2C351&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=trendcartbd-20&linkId=3988a2961e160f4ffe6b87c8af043afe&language=en_US&ref_=as_li_ss_tl"
    },
    {
      id: 2,
      title: "Smart Watch",
      priceUSD: 99.99,
      category: "Electronics",
      image: "https://m.media-amazon.com/images/I/71Q7JMrurtL._AC_SL1500_.jpg",
      affiliate: "https://www.amazon.com/gp/aw/d/B0BS3TZHBV?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=7e926c07228faabebb7accbb72643db0&hsa_cr_id=0&qid=1771785663&sr=1-2-f02f01d6-adaf-4bef-9a7c-29308eff9043&pd_rd_w=giEVj&content-id=amzn1.sym.e2c9099f-6964-4dbf-9ce9-8bc2c1a8ec1a%3Aamzn1.sym.e2c9099f-6964-4dbf-9ce9-8bc2c1a8ec1a&pf_rd_p=e2c9099f-6964-4dbf-9ce9-8bc2c1a8ec1a&pf_rd_r=P1K0H6T8JA454ZQDR21Y&pd_rd_wg=QC3uu&pd_rd_r=c275721b-f1e9-45de-a631-87f86e4be0be&th=1&linkCode=ll2&tag=trendcartbd-20&linkId=3b9f4808f861f91298526e504931caff&language=en_US&ref_=as_li_ss_tl"
    },
    {
      id: 3,
      title: "Bluetooth Speaker",
      priceUSD: 24.99,
      category: "Electronics",
      image: "https://m.media-amazon.com/images/I/61y+b4M0RZL._AC_SL1200_.jpg",
      affiliate: "https://www.amazon.com/Anker-SoundCore-Playtime-Bluetooth-Portable/dp/B016XTADG2?crid=13R9WOT8LEGRT&dib=eyJ2IjoiMSJ9.Ruva69X2wmY2wc-v_USRuVlnbsYyZSzRK3HpupHC6JBuHhMdFkimF5DnrCgi3oHMX1OrrJClEEyEDBricdeQMhOJee14OUAtpBZw5Ar6Z7GSYf7VfYwKaqZMC2oav5LgrJy7ps1MKo4LlUG7rwfwqYl5BMrNH6fdPJuTV_fuKF8JYfH_UPrVEJHACij9_xUycKTTrg5F2e5eEUv22p6omUiaFknUYDgppN4bGHRI1qU.lhey5rXVFvVAM5QF93gNp0suEBfwlYV0Vtq62TeLc0A&dib_tag=se&keywords=bluetooth%2Bspeaker&qid=1771785769&sprefix=bluetooth%2Caps%2C359&sr=8-8&th=1&linkCode=ll2&tag=trendcartbd-20&linkId=ace176f0c901133b13f3ad4922ff3246&language=en_US&ref_=as_li_ss_tl"
    }
  ];

  renderByCategory(allProducts);
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
      currency === "USD" ? `$${p.priceUSD}` : `৳${Math.round(p.priceUSD * BDT_RATE)}`;

    const card = `
      <article class="product-card">
        <img src="${p.image}" alt="${p.title}" style="width:100%;border-radius:5px;">
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

window.toggleCurrency = () => {
  currency = currency === "USD" ? "BDT" : "USD";
  renderByCategory(allProducts);
};

loadProducts();
