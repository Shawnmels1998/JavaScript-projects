const cardNumberInput = document.querySelector("#number");
const cardValidityInput = document.querySelector("#valid");
const cardCvvInput = document.querySelector("#cvv");

cardNumberInput.addEventListener("input", formatCardNumberInput);
cardValidityInput.addEventListener("input", formatCardValidityInput);
cardCvvInput.addEventListener("input", formatCvvInput);

function formatCardNumberInput() {
  const cardNumberValue = cardNumberInput.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/[^\da-z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
  cardNumberInput.value = cardNumberValue.slice(0, 19);
  formatCardValidityInput();
}

function formatCardValidityInput() {
  const cardValidityValue = cardValidityInput.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/[^\da-z]/g, "")
    .replace(/(.{2})/g, "$1/")
    .trim();
  cardValidityInput.value = cardValidityValue.slice(0, 5);
  if (cardValidityValue.length === 5) {
    formatCvvInput();
  }
}

function formatCvvInput() {
  const cardCvvValue = cardCvvInput.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/[^\da-z]/g, "")
    .trim();
  cardCvvInput.value = cardCvvValue.slice(0, 3);
}

