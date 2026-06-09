AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
  easing: "ease-out-cubic",
});

let currentLang = "id";

function toggleLanguage() {
  const languageButton = document.querySelector(".language-switch");
  languageButton.style.transform = "scale(0.95)";

  setTimeout(() => {
    currentLang = currentLang === "id" ? "en" : "id";
    updateLanguage();
    languageButton.style.transform = "scale(1)";
  }, 150);
}

function updateLanguage() {
  const elements = {
    id: document.querySelectorAll(".lang-id"),
    en: document.querySelectorAll(".lang-en"),
  };

  [...elements.id, ...elements.en].forEach((el) => {
    el.style.transition = "opacity 0.3s ease";
    el.style.opacity = "0";
  });

  setTimeout(() => {
    elements.id.forEach((el) => {
      el.style.display = currentLang === "id" ? "block" : "none";
      if (currentLang === "id") {
        setTimeout(() => (el.style.opacity = "1"), 50);
      }
    });

    elements.en.forEach((el) => {
      el.style.display = currentLang === "en" ? "block" : "none";
      if (currentLang === "en") {
        setTimeout(() => (el.style.opacity = "1"), 50);
      }
    });
  }, 300);
}

const navbar = document.querySelector(".navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

document.querySelectorAll(".profile-card, .activity-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
});

document.querySelectorAll(".photo-placeholder").forEach((photo) => {
  photo.addEventListener("mouseenter", () => {
    photo.style.transform = "scale(1.05)";
    photo.style.transition = "transform 0.3s ease";
  });

  photo.addEventListener("mouseleave", () => {
    photo.style.transform = "scale(1)";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  updateLanguage();

  document.querySelectorAll(".section").forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.5s ease, transform 0.5s ease";

    setTimeout(
      () => {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      },
      300 + index * 200,
    );
  });
});
