document.addEventListener("DOMContentLoaded", () => {

  /* ===== DUST ===== */
  const dustLayer = document.querySelector(".dust-layer");

  for (let i = 0; i < 120; i++) {
    const dust = document.createElement("span");

    const size = Math.random() * 3 + 1;
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
  const petals = ["☘︎", "❆", "❀"];

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


