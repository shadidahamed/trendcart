
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: #f7f7f7;
  color: #222;
}

/* ================= HEADER ================= */
.main-header {
  background: #fff;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  max-width: 1200px;
  margin: auto;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 22px;
  font-weight: 700;
  color: #ff4d4d;
  text-decoration: none;
}

.menu-toggle {
  display: none;
  font-size: 22px;
  background: none;
  border: none;
}

/* ================= NAV ================= */
.navbar ul {
  list-style: none;
  display: flex;
  gap: 24px;
}

.nav-item a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

/* Mega Menu */
.has-mega {
  position: relative;
}

.mega-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,.1);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.has-mega:hover .mega-menu {
  display: grid;
}

.mega-section h4 {
  margin-bottom: 10px;
}

.mega-section a {
  display: block;
  margin-bottom: 6px;
  color: #555;
  text-decoration: none;
}

/* ================= ACTIONS ================= */
.header-actions button {
  margin-left: 10px;
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

.login-btn {
  background: #eee;
}

.cart-btn {
  background: #ff4d4d;
  color: #fff;
}

/* ================= HERO ================= */
.hero {
  text-align: center;
  padding: 40px 20px;
}

.hero h1 {
  font-size: 32px;
  margin-bottom: 10px;
}

/* ================= PRODUCTS ================= */
.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.product-card {
  background: #fff;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0,0,0,.05);
}

.product-card img {
  width: 100%;
  border-radius: 10px;
}

.price {
  font-weight: 600;
  margin: 10px 0;
}

.buy-btn {
  display: inline-block;
  padding: 8px 14px;
  background: #ff4d4d;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
}

/* ================= FOOTER ================= */
.footer {
  text-align: center;
  padding: 20px;
  background: #fff;
  margin-top: 40px;
  font-size: 14px;
}

/* ================= MOBILE ================= */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .navbar {
    display: none;
    position: absolute;
    background: #fff;
    top: 100%;
    left: 0;
    width: 100%;
  }

  .navbar.active {
    display: block;
  }

  .navbar ul {
    flex-direction: column;
    padding: 20px;
  }

  .mega-menu {
    position: static;
    grid-template-columns: 1fr;
    box-shadow: none;
  }
}
