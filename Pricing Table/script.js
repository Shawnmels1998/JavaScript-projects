const checkBox = document.querySelector("#checkbox");
const slider = document.querySelector(".slider");
const levels = {
  basic: document.querySelector(".basic"),
  prof: document.querySelector(".prof"),
  master: document.querySelector(".master"),
};

slider.addEventListener("click", () => {
  if (!checkBox.checked) {
    setLevelPrices("120", "240", "360");
  } else {
    setLevelPrices("9.99", "19.99", "29.99");
  }
});

function setLevelPrices(basicPrice, profPrice, masterPrice) {
  levels.basic.textContent = basicPrice;
  levels.prof.textContent = profPrice;
  levels.master.textContent = masterPrice;
}
