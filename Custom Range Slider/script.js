const rangeSlider = document.querySelector("input");
const valueEl = document.querySelector(".value");

const updateValue = () => {
  valueEl.textContent = rangeSlider.value;
};

rangeSlider.addEventListener("input", updateValue);
updateValue();

