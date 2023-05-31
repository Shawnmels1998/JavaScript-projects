function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function slideIn() {
  const items = document.querySelectorAll(".timeline li");
  items.forEach((item) => {
    if (isElementInViewport(item)) {
      item.classList.add("slide-in");
    } else {
      item.classList.remove("slide-in");
    }
  });
}

function initialize() {
  window.addEventListener("load", slideIn);
  window.addEventListener("scroll", slideIn);
  window.addEventListener("resize", slideIn);
}

initialize();
