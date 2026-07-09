function renderHeader() {
  const catLinks = CATEGORIES.map(
    (c) => `<a href="category.html?cat=${c.slug}">${c.name}</a>`
  ).join('');

  return `
  <header class="site-header">
    <div class="header-top">
      <div class="container header-top-inner">
        <span>📞 <a href="tel:${ANIDEV.phone}">${ANIDEV.phoneDisplay}</a></span>
        <span>✉️ <a href="mailto:${ANIDEV.email}">${ANIDEV.email}</a></span>
        <span>🚚 Free delivery on orders above ₹499</span>
      </div>
    </div>
    <div class="container header-main">
      <a href="index.html" class="logo">Ani<span>dev</span></a>
      <form class="header-search" onsubmit="event.preventDefault(); window.location.href='categories.html';">
        <input type="search" placeholder="Search fruits, grains, jewelry...">
        <button type="submit">Search</button>
      </form>
      <nav class="main-nav" id="main-nav">
        <div class="nav-dropdown">
          <a href="categories.html" class="nav-link">Shop ▾</a>
          <div class="dropdown-menu">${catLinks}</div>
        </div>
        <a href="about.html" class="nav-link">About</a>
        <a href="contact.html" class="nav-link">Contact</a>
      </nav>
      <div class="header-actions">
        <a href="cart.html" class="cart-link">
          🛒 <span class="cart-badge">0</span>
        </a>
        <button class="menu-toggle" id="menu-toggle" aria-label="Menu">☰</button>
      </div>
    </div>
  </header>`;
}

function renderFooter() {
  const catLinks = CATEGORIES.map(
    (c) => `<li><a href="category.html?cat=${c.slug}">${c.name}</a></li>`
  ).join('');

  return `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-col">
        <a href="index.html" class="logo footer-logo">Ani<span>dev</span></a>
        <p>Fruits, vegetables, grains, cereals and artificial jewelry — delivered by Anidev.</p>
        <p class="footer-contact">
          <strong>${ANIDEV.company}</strong><br>
          <strong>Contact:</strong> ${ANIDEV.contactPerson}<br>
          <strong>Address:</strong><br>${ANIDEV.address}<br><br>
          <strong>Phone:</strong> <a href="tel:${ANIDEV.phone}">${ANIDEV.phoneDisplay}</a><br>
          <strong>Email:</strong> <a href="mailto:${ANIDEV.email}">${ANIDEV.email}</a>
        </p>
      </div>
      <div class="footer-col">
        <h4>Shop Categories</h4>
        <ul>${catLinks}</ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="categories.html">Browse All</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <ul>
          <li><a href="terms.html">Terms & Conditions</a></li>
          <li><a href="privacy.html">Privacy Policy</a></li>
          <li><a href="refund.html">Refund Policy</a></li>
          <li><a href="cancellation.html">Cancellation Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>© ${new Date().getFullYear()} ${ANIDEV.company}. All rights reserved. | COD &amp; Razorpay payments accepted</p>
      </div>
    </div>
  </footer>`;
}

function injectLayout() {
  const headerSlot = document.getElementById('site-header');
  const footerSlot = document.getElementById('site-footer');
  if (headerSlot) headerSlot.innerHTML = renderHeader();
  if (footerSlot) footerSlot.innerHTML = renderFooter();

  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  updateCartBadge();
}

function initFAQ() {
  document.querySelectorAll('.faq-question').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  injectLayout();
  initFAQ();
});

function renderLegalPage(title, content) {
  document.title = `${title} | Anidev`;
  const el = document.getElementById('legal-content');
  if (el) {
    el.innerHTML = `<h1>${title}</h1><div class="legal-body">${content}</div>`;
  }
}
