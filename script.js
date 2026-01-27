<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>TrendCart – Trending Products</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
</head>
<body>

<header class="main-header">
  <div class="logo">TrendCart</div>

  <!-- Navbar -->
  <nav class="navbar">
    <ul class="nav-items">
      <li class="nav-item">
        Categories
        <div class="mega-menu">
          <div class="mega-section">
            <h4>Electronics</h4>
            <a href="#">Headphones</a>
            <a href="#">Smart Watches</a>
            <a href="#">Speakers</a>
          </div>
          <div class="mega-section">
            <h4>Books</h4>
            <a href="#">Fiction</a>
            <a href="#">Non-Fiction</a>
            <a href="#">Comics</a>
          </div>
          <div class="mega-section">
            <h4>Clothing</h4>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
          </div>
        </div>
      </li>
      <li class="nav-item"><a href="#">Deals</a></li>
      <li class="nav-item"><a href="#">New Arrivals</a></li>
      <li class="nav-item"><a href="#">Best Sellers</a></li>
    </ul>
  </nav>

  <!-- Header Actions -->
  <div class="header-actions">
    <button class="login-btn">Login</button>
    <button class="cart-btn">Cart 🛒</button>
  </div>
</header>

<p class="tagline">Trending products people love 🔥</p>

<main class="container">
  <section class="product-grid" id="productGrid">
    <p class="loading">Loading products...</p>
  </section>
</main>

<section class="feedback-section">
  <h2>Have a Complaint or Suggestion?</h2>
  <form id="feedbackForm">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <textarea name="message" placeholder="Write your feedback to help us..." required></textarea>
    <button type="submit">Submit</button>
  </form>
  <p id="feedbackMsg"></p>
</section>

<!-- Help Center Chat -->
<div class="help-center" id="helpCenter">
  <div class="chat-header" onclick="toggleChat()">Help Center 💬</div>
  <div class="chat-body" id="chatBody">
    <div class="chat-message bot">Hello! How can I help you today?</div>
  </div>
  <input type="text" id="chatInput" placeholder="Type your question..." onkeypress="sendMessage(event)">
</div>

<footer class="footer">
  <p>© 2026 TrendCart. Affiliate links may earn commission.</p>
</footer>

<script src="script.js"></script>
</body>
</html>

