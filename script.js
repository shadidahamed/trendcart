.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 40px;
  background: #ffffff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-size: 22px;
  font-weight: 700;
  color: #0397d3;
}

.search-bar {
  display: flex;
  width: 420px;
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
}

.search-bar input {
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
}

.search-bar button {
  background: #0397d3;
  color: white;
  border: none;
  padding: 0 18px;
  cursor: pointer;
}

.header-icons span {
  margin-left: 20px;
  cursor: pointer;
  font-weight: 500;
}

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
