const elements = {
  number: document.querySelector('.number'),
  btn: document.querySelector('.generate')
};

elements.btn.addEventListener("click", generateNumber);

function generateNumber() {
  const randomNumber = getRandomNumber(1, 100);
  elements.number.innerHTML = randomNumber;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
