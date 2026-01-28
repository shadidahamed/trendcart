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
      <button class="buy-btn" onclick="window.open('${p.link}','_blank')">Buy Now</button>
    </div>
  `;
  grid.appendChild(card);
});

/***********************
 AI HELP CENTER BRAIN
************************/
const aiBrain = [
  {
    keywords: ["delivery", "shipping", "arrive"],
    reply: "Delivery usually takes 3–7 working days depending on your location."
  },
  {
    keywords: ["refund", "return", "money back"],
    reply: "Refunds are processed within 5–10 working days after approval."
  },
  {
    keywords: ["affiliate", "commission"],
    reply: "We earn a small commission from affiliate links. No extra cost to you."
  },
  {
    keywords: ["contact", "human", "support"],
    reply: "Your message has been forwarded to our support system."
  }
];

function getAIReply(text) {
  text = text.toLowerCase();
  for (let item of aiBrain) {
    for (let key of item.keywords) {
      if (text.includes(key)) {
        return item.reply;
      }
    }
  }
  return "I couldn’t find an exact answer. Your message has been sent for review.";
}

/***********************
 HELP CHAT UI
************************/
function toggleChat()function toggleChat() {
  const helpCenter = document.querySelector(".help-center");
  helpCenter.classList.toggle("active");

  const chatBody = document.getElementById("chatBody");
  const chatInput = document.getElementById("chatInput");

  if (helpCenter.classList.contains("active")) {
    chatBody.scrollTop = chatBody.scrollHeight;
    chatInput.focus();
  }
}

}

function sendMessage(e) {
  if (e.key !== "Enter") return;

  const input = document.getElementById("chatInput");
  const chatBody = document.getElementById("chatBody");

  const userText = input.value.trim();
  if (!userText) return;

  chatBody.innerHTML += `<div class="chat-message user">${userText}</div>`;

  const reply = getAIReply(userText);
  chatBody.innerHTML += `<div class="chat-message bot">${reply}</div>`;

  chatBody.scrollTop = chatBody.scrollHeight;
  input.value = "";
}

/***********************
 FEEDBACK / COMPLAINT
************************/
const form = document.getElementById("feedbackForm");
const msg = document.getElementById("feedbackMsg");

// Your Apps Script Web App URL
const SHEET_API_URL = "https://script.google.com/macros/s/AKfycbxTVDbF7ZJbl7pcssSXiQb7S_v1UcMLX9UGCAaT46rgwad79Tg8G-VvXu8X1ow9-v8oYg/exec";

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  try {
    const res = await fetch(SHEET_API_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const result = await res.json();
    if (result.result === "success") {
      msg.textContent = "Thank you! Your message has been recorded.";
      form.reset();
    } else {
      msg.textContent = "Error! Please try again later.";
    }
  } catch (err) {
    console.error(err);
    msg.textContent = "Error! Please try again later.";
  }
});
