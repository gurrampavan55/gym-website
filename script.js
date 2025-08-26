// Navbar toggle
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("active"));

// Scroll fade-in effect
const sections = document.querySelectorAll('.fade-section');
const options = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, options);
sections.forEach(section => observer.observe(section));
// Close mobile menu when a link is clicked
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", () => {
    // Only close if menu is active (mobile)
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
    }
  });
});

