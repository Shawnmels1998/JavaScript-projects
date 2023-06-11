const elements = {
  hex: document.querySelector(".hex"),
  btn: document.querySelector(".generate"),
};

elements.btn.addEventListener("click", generateColor);

function generateColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  elements.hex.innerHTML = randomColor;
}

function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
}
