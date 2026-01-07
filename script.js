document.addEventListener("DOMContentLoaded", () => {

  /* ===== DUST PHYSICS ===== */
  const dustLayer = document.querySelector(".dust-layer");
  const dusts = [];
  const DUST_COUNT = 260;

  for (let i = 0; i < DUST_COUNT; i++) {
    const dust = document.createElement("span");

    const size = Math.random() * 2 + 0.6;
    dust.style.width = size + "px";
    dust.style.height = size + "px";

    dustLayer.appendChild(dust);

   dusts.push({
  el: dust,
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  vx: (Math.random() - 0.5) * 0.3,
  vy: (Math.random() - 0.5) * 0.3,
  baseVx: (Math.random() - 0.5) * 0.15,
  baseVy: (Math.random() - 0.5) * 0.15
});
  }
  
  let mouseX = -9999;
  let mouseY = -9999;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateDust() {
    dusts.forEach(d => {
      const dx = d.x - mouseX;
      const dy = d.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;

      if (dist < 180) {
        const force = (180 - dist) / 180;
        d.vx += (dx / dist) * force * 1.2;
        d.vy += (dy / dist) * force * 1.2;
      }

      // lực bơi nền – giúp bụi hồi lại
d.vx += (d.baseVx - d.vx) * 0.01;
d.vy += (d.baseVy - d.vy) * 0.01;

      // chuyển động nền
      d.vx += (Math.random() - 0.5) * 0.02;
      d.vy += (Math.random() - 0.5) * 0.02;

      // ma sát
      d.vx *= 0.965;
      d.vy *= 0.965;

      d.x += d.vx;
      d.y += d.vy;

      // wrap màn hình
      if (d.x < 0) d.x = window.innerWidth;
      if (d.x > window.innerWidth) d.x = 0;
      if (d.y < 0) d.y = window.innerHeight;
      if (d.y > window.innerHeight) d.y = 0;

      d.el.style.transform = `translate(${d.x}px, ${d.y}px)`;
    });

    requestAnimationFrame(animateDust);
  }

  animateDust();

  /* ===== PETALS ===== */
  const petalLayer = document.querySelector(".petal-layer");

  for (let i = 0; i < 30; i++) {
    const petal = document.createElement("span");
    petal.textContent = "✿";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = Math.random() * -100 + "px";
    petal.style.fontSize = Math.random() * 18 + 14 + "px";
    petal.style.animationDuration = 18 + Math.random() * 20 + "s";
    petal.style.animationDelay = Math.random() * 10 + "s";

    petalLayer.appendChild(petal);
  }

});


