/***********************
 PRODUCT DATA
************************/
const products = [
  {
    name: "Wireless Earbuds Pro",
    description: "Noise cancellation, deep bass",
    image: "https://via.placeholder.com/300",
    price: 49.99,
    oldPrice: 55.99,
    discount: "10% OFF",
    rating: 4.5,
    reviews: 120,
    link: "#"
  },
  {
    name: "Smart Fitness Watch",
    description: "Heart-rate & sleep tracking",
    image: "https://via.placeholder.com/300",
    price: 79.99,
    oldPrice: 84.99,
    discount: "5% OFF",
    rating: 4.2,
    reviews: 80,
    link: "#"
  },
  {
    name: "Pokemon Collector Card",
    description: "Limited edition & rare",
    image: "https://via.placeholder.com/300",
    price: 120,
    oldPrice: 0,
    discount: "",
    rating: 5,
    reviews: 45,
    link: "#"
  }
];

const grid = document.getElementById("productGrid");

/***********************
 STAR RATING
************************/
function createStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += rating >= i ? "★" : "☆";
  }
  return `<span class="stars">${stars}</span>`;
}

/***********************
 RENDER PRODUCTS
************************/
products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    ${p.discount ? `<div class="discount">${p.discount}</div>` : ""}
    <img src="${p.image}" alt="${p.name}">
    <div class="product-info">
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <div class="price-row">
        <span class="price">$${p.price}</span>
        ${p.oldPrice ? `<span class="old-price">$${p.oldPrice}</span>` : ""}
      </div>
      <div class="rating-row">
        ${createStars(p.rating)}
        <span class="reviews">(${p.reviews} reviews)</span>
      </div>
      <button class="buy-btn" onclick="window.open('${p.link}','_blank')">
        Buy Now
      </button>
    </div>
  `;

  grid.appendChild(card);
});
