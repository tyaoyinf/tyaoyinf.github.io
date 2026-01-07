document.addEventListener("DOMContentLoaded", () => {

  /* =======================
     ✦ DUST PARTICLES
     ======================= */
  const dustLayer = document.querySelector(".dust-layer");

  for (let i = 0; i < 60; i++) {
    const dust = document.createElement("span");

    const size = Math.random() * 3 + 1;
    const duration = Math.random() * 30 + 20;

    dust.style.width = `${size}px`;
    dust.style.height = `${size}px`;
    dust.style.left = `${Math.random() * 100}%`;
    dust.style.animationDuration = `${duration}s`;
    dust.style.animationDelay = `${Math.random() * 20}s`;

    dustLayer.appendChild(dust);
  }

  /* =======================
     ✦ PETAL FALL
     ======================= */
  const petalLayer = document.querySelector(".petal-layer");
  const petals = ["🌸", "🍃", "❀"];

  for (let i = 0; i < 25; i++) {
    const petal = document.createElement("span");

    petal.textContent = petals[Math.floor(Math.random() * petals.length)];

    const size = Math.random() * 14 + 10;
    const duration = Math.random() * 25 + 15;

    petal.style.left = `${Math.random() * 100}%`;
    petal.style.fontSize = `${size}px`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${Math.random() * 15}s`;

    petalLayer.appendChild(petal);
  }

});

