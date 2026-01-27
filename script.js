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

function createStars(rating){
  let stars = "";
  for(let i=1;i<=5;i++){
    if(rating >= i) stars += "★";
    else if(rating > i-1 && rating < i) stars += "☆";
    else stars += "☆";
  }
  return `<span class="stars">${stars}</span>`;
}

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    ${p.discount ? `<div class="badge">${p.discount}</div>` : ""}
    <img src="${p.image}" alt="${p.name}">
    <div class="product-info">
      <div class="product-title">${p.name}</div>
      <div class="product-desc">${p.description}</div>
      
      <div class="price-row">
        <div class="price">
          $${p.price} ${p.oldPrice ? `<span class="old-price">$${p.oldPrice}</span>` : ""}
        </div>
        <div class="discount">${p.discount}</div>
      </div>

      <div class="rating-row">
        ${createStars(p.rating)} <span class="reviews">(${p.reviews} reviews)</span>
      </div>

      <button class="buy-btn" onclick="window.open('${p.link}', '_blank')">Buy on Amazon</button>
    </div>
  `;
  grid.appendChild(card);
});

// Feedback Form
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('feedbackMsg').textContent = "Thank you for your feedback!";
  this.reset();
});

// Help Chat
function toggleChat() {
  const chatBody = document.getElementById('chatBody');
  const chatInput = document.getElementById('chatInput');
  chatBody.style.display = chatBody.style.display === 'block' ? 'none' : 'block';
  chatInput.style.display = chatInput.style.display === 'block' ? 'none' : 'block';
}

function sendMessage(e) {
  if (e.key === 'Enter') {
    const input = document.getElementById('chatInput');
    const chatBody = document.getElementById('chatBody');
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user';
    userMsg.textContent = input.value;
    chatBody.appendChild(userMsg);
    input.value = '';

    // Bot response
    const botMsg = document.createElement('div');
    botMsg.className = 'chat-message bot';
    botMsg.textContent = "Thank you for your message! We'll get back to you soon.";
    chatBody.appendChild(botMsg);

    chatBody.scrollTop = chatBody.scrollHeight;
  }


function doPost(e){ 
  var ss = SpreadsheetApp.openById("1r_FW8mJhPyVq3PLONefifX7eGOZ38xaUHxxXdp3sqIU"); 
  var sheet = ss.getSheetByName("Sheet1");
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), data.name, data.email, data.message, "New"]);
  return ContentService.createTextOutput(JSON.stringify({"result":"success"}))
                       .setMimeType(ContentService.MimeType.JSON);
}



}

document.getElementById('feedbackForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;

  fetch("https://script.google.com/macros/s/AKfycbx6A0NWs4urJIEm99nawD1qPOGuWWarso_gdIOk2J0hlRHXp6P1LWgJq710n5f3ljKD/exec", {
    method: "POST",
    body: JSON.stringify({name, email, message}),
    headers: {"Content-Type": "application/json"}
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('feedbackMsg').textContent = "Thank you for your feedback!";
    this.reset();
  })
  .catch(err => {
    document.getElementById('feedbackMsg').textContent = "Something went wrong. Try again.";
  });
});
