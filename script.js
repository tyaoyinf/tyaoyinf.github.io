let lastScrollY = window.scrollY;

document.addEventListener("DOMContentLoaded", () => {

  /* ===== DUST ===== */
  const dustLayer = document.querySelector(".dust-layer");

  for (let i = 0; i < 250; i++) {
    const dust = document.createElement("span");

    const size = Math.random() * 2.2 + 0.6;
    dust.style.width = size + "px";
    dust.style.height = size + "px";

    dust.style.left = Math.random() * 100 + "vw";
    dust.style.top = Math.random() * 100 + "vh";

    dust.style.animationDuration = 25 + Math.random() * 35 + "s";
    dust.style.animationDelay = Math.random() * 10 + "s";

    dustLayer.appendChild(dust);
  }

  /* ===== PETALS (ICON) ===== */
  const petalLayer = document.querySelector(".petal-layer");
  const petals = ["☘︎", "⁎"];

  for (let i = 0; i < 30; i++) {
    const petal = document.createElement("span");

    petal.textContent = petals[Math.floor(Math.random() * petals.length)];

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = Math.random() * -100 + "px";

    petal.style.fontSize = Math.random() * 16 + 14 + "px";
    petal.style.animationDuration = 18 + Math.random() * 20 + "s";
    petal.style.animationDelay = Math.random() * 10 + "s";

    petalLayer.appendChild(petal);
  }
});

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  const delta = currentScroll - lastScrollY;

  document.querySelectorAll(".dust-layer span").forEach(dust => {
    const drift = delta * 0.12;
    dust.style.transform = `translate(${drift}px, ${-drift}px)`;
  });

  lastScrollY = currentScroll;
});


