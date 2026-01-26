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
