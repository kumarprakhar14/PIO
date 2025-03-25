// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// Set current year in footer
document.getElementById("current-year").textContent = new Date().getFullYear();
