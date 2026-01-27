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
  }
];

const grid = document.getElementById("productGrid");
if (grid) {
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      ${p.discount ? `<div class="badge">${p.discount}</div>` : ""}
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <div class="price-row">
        <span>$${p.price}</span>
        ${p.oldPrice ? `<span class="old-price">$${p.oldPrice}</span>` : ""}
      </div>
      <button class="buy-btn" onclick="window.open('${p.link}')">Buy</button>
    `;
    grid.appendChild(card);
  });
}

/***********************
 HELP CENTER
************************/
const aiBrain = [
  { keywords: ["delivery"], reply: "Delivery takes 3–7 days." },
  { keywords: ["refund"], reply: "Refunds take 5–10 days." },
  { keywords: ["affiliate"], reply: "We earn affiliate commission." }
];

function getAIReply(text) {
  text = text.toLowerCase();
  for (let b of aiBrain) {
    if (b.keywords.some(k => text.includes(k))) return b.reply;
  }
  return "Message forwarded to support.";
}

function toggleChat() {
  document.getElementById("chatBody")?.classList.toggle("show");
  document.getElementById("chatInput")?.classList.toggle("show");
}

function sendMessage(e) {
  if (e.key !== "Enter") return;
  const input = document.getElementById("chatInput");
  const body = document.getElementById("chatBody");
  if (!input.value) return;

  body.innerHTML += `<div class="chat-message user">${input.value}</div>`;
  body.innerHTML += `<div class="chat-message bot">${getAIReply(input.value)}</div>`;
  input.value = "";
  body.scrollTop = body.scrollHeight;
}

function doPost(e){ 
  var ss = SpreadsheetApp.openById("1s8cSoe4JAkEMO4KxDZ7-61ZqsedYhzp5S2W-c2Wk220"); 
  var sheet = ss.getSheetByName("Sheet1");

  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([new Date(), data.name, data.email, data.message, "New"]);

  return ContentService
           .createTextOutput(JSON.stringify({"result":"success"}))
           .setMimeType(ContentService.MimeType.JSON);
}


/***********************
 FEEDBACK FORM
************************/
const SHEET_API_URL =
"https://script.google.com/macros/s/AKfycbylNYNVCqQdl1EQXMsblbALFJ1orhCnSGhrhem6xSZ4Xes2m-lEAlFj_0RUoYHhbeaCug/exec";

const form = document.getElementById("feedbackForm");
const msg = document.getElementById("feedbackMsg");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(SHEET_API_URL, {
      method: "POST",
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      }),
      headers: { "Content-Type": "application/json" }
    })
    .then(r => r.json())
    .then(() => {
      msg.textContent = "Message sent successfully.";
      form.reset();
    })
    .catch(() => {
      msg.textContent = "Submission failed.";
    });
  });
}
