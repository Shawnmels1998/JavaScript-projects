const hero = document.querySelector(".hero");
const heroBoy = document.querySelector(".hero-boy");
const villain = document.querySelector(".villain");

const jump = () => {
  if (!hero.classList.contains("animate")) {
    hero.classList.add("animate");
    villain.style.animation = "move 1s infinite linear";
  }

  setTimeout(() => {
    hero.classList.remove("animate");
  }, 300);
};

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    jump();
  }
});

const isAlive = setInterval(() => {
  const heroTop = parseInt(window.getComputedStyle(hero).top);
  const villainLeft = parseInt(window.getComputedStyle(villain).left);

  if (villainLeft < 40 && villainLeft > 20 && heroTop >= 130) {
    villain.style.animation = "none";
    alert("Game over, press spacebar to start");
  }
}, 10);

