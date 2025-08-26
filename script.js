const content = document.getElementById("content");

function loadPage(page) {
  let html = "";
  if (page === "home") {
    html = `
      <section class="hero fade">
        <h2>Welcome to FitZone Gym</h2>
        <p>Train with the best equipment, trainers & environment.</p>
        <a href="#" class="btn" data-page="plans">Join Now</a>
      </section>
    `;
  } else if (page === "services") {
    html = `
      <section class="fade">
        <h2>Our Services</h2>
        <div class="cards">
          <div class="card">
            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438" alt="Training">
            <h3>Personal Training</h3>
            <p>Certified coaches for personalized workout plans.</p>
          </div>
          <div class="card">
            <img src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1" alt="Classes">
            <h3>Group Classes</h3>
            <p>Fun, energetic sessions like Zumba, HIIT, and Yoga.</p>
          </div>
          <div class="card">
            <img src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74" alt="Nutrition">
            <h3>Nutrition Guidance</h3>
            <p>Custom diet plans for your body type & goals.</p>
          </div>
        </div>
      </section>
    `;
  } else if (page === "plans") {
    html = `
      <section class="fade">
        <h2>Membership Plans</h2>
        <div class="cards">
          <div class="card"><h3>Basic</h3><p>₹999/month - Gym Access</p></div>
          <div class="card"><h3>Premium</h3><p>₹1999/month - Gym + Classes</p></div>
          <div class="card"><h3>Elite</h3><p>₹2999/month - All Access + Nutrition + Coach</p></div>
        </div>
      </section>
    `;
  } else if (page === "contact") {
    html = `
      <section class="fade">
        <h2>Contact Us</h2>
        <p>Email: contact@fitzone.com</p>
        <p>Phone: +91 9876543210</p>
        <p>Location: MG Road, Hyderabad, India</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2828278089!2d78.4867!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb975bf4b3a3f5%3A0x3d4e6bdf7b17db73!2sMG%20Road!5e0!3m2!1sen!2sin!4v1675272948345!5m2!1sen!2sin" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </section>
    `;
  }
  content.innerHTML = html;
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = e.target.getAttribute("data-page");
    loadPage(page);
  });
});

// Load Home initially
loadPage("home");
