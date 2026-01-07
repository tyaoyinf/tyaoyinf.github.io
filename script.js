document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     ✦ DUST (floating)
     ===================== */
  const dustLayer = document.querySelector(".dust-layer");

  for (let i = 0; i < 80; i++) {
    const dust = document.createElement("span");

    const size = Math.random() * 4 + 1.5;
    const duration = Math.random() * 40 + 30;

    dust.style.width = `${size}px`;
    dust.style.height = `${size}px`;
    dust.style.left = `${Math.random() * 100}%`;
    dust.style.top = `${Math.random() * 100}%`;
    dust.style.animationDuration = `${duration}s`;
    dust.style.animationDelay = `${Math.random() * 20}s`;

    dustLayer.appendChild(dust);
  }

  /* =====================
     ✦ PETALS (falling)
     ===================== */
  const petalLayer = document.querySelector(".petal-layer");
  const petals = ["🌸", "🍃", "❀"];

  for (let i = 0; i < 30; i++) {
    const petal = document.createElement("span");

    petal.textContent = petals[Math.floor(Math.random() * petals.length)];

    const size = Math.random() * 16 + 12;
    const duration = Math.random() * 25 + 20;

    petal.style.left = `${Math.random() * 100}%`;
    petal.style.top = `${Math.random() * -100}px`;
    petal.style.fontSize = `${size}px`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${Math.random() * 15}s`;

    petalLayer.appendChild(petal);
  }

});


