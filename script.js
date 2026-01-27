

const products = [
  {
    name: "Wireless Earbuds Pro",
    price: "$49.99",
    image: "https://via.placeholder.com/400",
    link: "https://www.amazon.com"
  },
  {
    name: "Smart Fitness Watch",
    price: "$79.99",
    image: "https://via.placeholder.com/400",
    link: "https://www.amazon.com"
  },
  {
    name: "Gaming Mouse RGB",
    price: "$29.99",
    image: "https://via.placeholder.com/400",
    link: "https://www.amazon.com"
  }
];

const list = document.getElementById("productList");

list.innerHTML = "";

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product";

  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <div class="price">${p.price}</div>
    <button class="buy" onclick="window.open('${p.link}','_blank')">
      Buy Now
    </button>
  `;

  list.appendChild(card);
});

.products {
  padding: 40px 60px;
  background: #f7f8fa;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 24px;
}

.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.06);
  transition: 0.25s;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.12);
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 16px;
}

.product-title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #222;
}

.product-desc {
  font-size: 13px;
  color: #666;
  margin-bottom: 10px;
}

.price-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price {
  font-size: 16px;
  font-weight: bold;
  color: #111;
}

.discount {
  font-size: 12px;
  color: #e53935;
}

.buy-btn {
  display: block;
  width: 100%;
  margin-top: 12px;
  padding: 10px;
  border-radius: 8px;
  background: #ff9900;
  color: white;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
}

.buy-btn:hover {
  background: #e68900;
}




