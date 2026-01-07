let lastScrollY = window.scrollY;

document.addEventListener("DOMContentLoaded", () => {

  /* ===== DUST ===== */
  const dustLayer = document.querySelector(".dust-layer");

  for (let i = 0; i < 250; i++) {
    const dust = document.createElement("span");

    const size = Math.random() * 2.2 + 0.6;
    dust.style.width = size + "px";
    dust.style.height = size + "px";

    dust.dataset.x = Math.random() * window.innerWidth;
    dust.dataset.y = Math.random() * window.innerHeight;

    dust.style.left = dust.dataset.x + "px";
    dust.style.top = dust.dataset.y + "px";

    dust.style.animationDuration = 25 + Math.random() * 35 + "s";
    dust.style.animationDelay = Math.random() * 10 + "s";

    dustLayer.appendChild(dust);
  }

  /* ===== PETALS (ICON) ===== */
  const petalLayer = document.querySelector(".petal-layer");
  const petals = ["✿"];

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

window.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  document.querySelectorAll(".dust-layer span").forEach(dust => {
    const dx = mouseX - dust.dataset.x;
    const dy = mouseY - dust.dataset.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const force = Math.max(0, 120 - distance) / 120;

    const moveX = -dx * force * 0.15;
    const moveY = -dy * force * 0.15;

    dust.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});


