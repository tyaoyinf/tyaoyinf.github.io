document.addEventListener("DOMContentLoaded", () => {

  const dustLayer = document.querySelector('.dust-layer');
  const petalLayer = document.querySelector('.petal-layer');

  if (!dustLayer || !petalLayer) {
    console.log("❌ effect layers not found");
    return;
  }

  /* ----- BỤI MỜ (NHIỀU) ----- */
  for (let i = 0; i < 100; i++) {
    const d = document.createElement('div');
    d.className = 'dust';
    d.style.left = Math.random() * 100 + 'vw';
    d.style.animationDuration = 25 + Math.random() * 40 + 's';
    d.style.animationDelay = Math.random() * 30 + 's';
    dustLayer.appendChild(d);
  }

  /* ----- SPARKLE (RÕ) ----- */
  for (let i = 0; i < 35; i++) {
    const s = document.createElement('div');
    s.className = 'spark';
    s.style.left = Math.random() * 100 + 'vw';
    s.style.animationDuration = 18 + Math.random() * 25 + 's';
    s.style.animationDelay = Math.random() * 20 + 's';
    dustLayer.appendChild(s);
  }

  /* ----- HOA & LÁ ----- */
  const petals = ['❀','✿','❁','🍃'];

  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    p.textContent = petals[Math.floor(Math.random() * petals.length)];
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDuration = 30 + Math.random() * 35 + 's';
    p.style.animationDelay = Math.random() * 25 + 's';
    petalLayer.appendChild(p);
  }

  console.log("✨ effects loaded");

});
