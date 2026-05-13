/* ============================================================
   HANSON OSHIOBUGHIE — IT EXECUTIVE PORTFOLIO
   script.js: Nav scroll effect, mobile menu, contact form
   ============================================================ */

/* ---------- NAVBAR: Add "scrolled" class after user scrolls down ---------- */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ---------- MOBILE NAV TOGGLE ---------- */
const navToggle  = document.getElementById('navToggle');
const navLinks   = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

/* ---------- CONTACT FORM — Formspree AJAX submission ---------- */
const form       = document.getElementById('contactForm');
const submitBtn  = document.getElementById('submitBtn');
const successMsg = document.getElementById('formSuccess');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent default page reload

  // Give user visual feedback while sending
  submitBtn.textContent = 'Sending…';
  submitBtn.disabled = true;

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      // Success: hide the form fields and show the success message
      form.reset();
      submitBtn.style.display = 'none';
      successMsg.classList.add('visible');
    } else {
      // Server returned an error
      submitBtn.textContent = 'Try Again';
      submitBtn.disabled = false;
      alert('Something went wrong. Please email hanson@cellanome.com directly.');
    }
  } catch {
    // Network error
    submitBtn.textContent = 'Try Again';
    submitBtn.disabled = false;
    alert('Unable to send. Please email hanson@cellanome.com directly.');
  }
});

/* ---------- SMOOTH SCROLL for anchor links (backup for older browsers) ---------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
