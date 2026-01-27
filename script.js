
const products = [
  {
    name: "Wireless Earbuds Pro",
    description: "Noise cancellation, deep bass",
    image: "https://via.placeholder.com/300",
    price: 49.99,
    discount: "10% OFF",
    link: "#"
  },
  {
    name: "Smart Fitness Watch",
    description: "Heart-rate & sleep tracking",
    image: "https://via.placeholder.com/300",
    price: 79.99,
    discount: "5% OFF",
    link: "#"
  },
  {
    name: "Pokemon Collector Card",
    description: "Limited edition & rare",
    image: "https://via.placeholder.com/300",
    price: 120,
    discount: "",
    link: "#"
  }
];

const grid = document.getElementById("productGrid");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${p.image}">
    <div class="product-info">
      <div class="product-title">${p.name}</div>
      <div class="product-desc">${p.description}</div>

      <div class="price-row">
        <div class="price">$${p.price}</div>
        <div class="discount">${p.discount}</div>
      </div>

      <button class="buy-btn">Buy on Amazon</button>
    </div>
  `;

  grid.appendChild(card);
});

