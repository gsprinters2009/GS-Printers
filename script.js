// HEADER SCROLL EFFECT
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// MOBILE MENU TOGGLE
const mobileBtn = document.getElementById("mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

mobileBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});


// CLOSE MOBILE MENU ON LINK CLICK
const mobileLinks = document.querySelectorAll(".mobile-nav a");

mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
});


// HERO IMAGE FADE-IN
window.addEventListener("load", () => {
  const heroVisual = document.querySelector(".hero-visual img");

  if (heroVisual) {
    heroVisual.style.opacity = "0";
    heroVisual.style.transform = "translateY(30px)";

    setTimeout(() => {
      heroVisual.style.transition = "all 0.8s ease";
      heroVisual.style.opacity = "1";
      heroVisual.style.transform = "translateY(0)";
    }, 300);
  }
});


// SIMPLE SCROLL REVEAL
const revealElements = document.querySelectorAll(
  ".service-card, .trust-card, .portfolio-grid img, .client-logos img, .about-content, .about-image"
);

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(30px)";
  element.style.transition = "all 0.7s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// WHATSAPP CTA TRACKING PLACEHOLDER
const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');

whatsappButtons.forEach(button => {
  button.addEventListener("click", () => {
    console.log("WhatsApp CTA clicked");
  });
});

const form = document.getElementById("contact-form");
const result = document.getElementById("result");

form.addEventListener("submit", async function(e) {

    e.preventDefault();

    const formData = new FormData(form);

    result.innerHTML = "Sending...";

    const response = await fetch(
        "https://api.web3forms.com/submit",
        {
            method: "POST",
            body: formData
        }
    );

    const data = await response.json();

    if(data.success){

        result.innerHTML =
        "Thank you! Your enquiry has been sent.";

        form.reset();

    } else {

        result.innerHTML =
        "Error: " + data.message;

    }

});
