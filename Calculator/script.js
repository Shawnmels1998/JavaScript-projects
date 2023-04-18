const keys = Array.from(document.getElementsByTagName("li"));
const result = document.querySelector("p");
const clear = document.querySelector(".clear");

keys.forEach(key => {
  key.addEventListener("click", () => {
    const value = key.innerHTML;
    if (value === "=") {
      calculate();
    } else if (value === "/" || value === "*") {
      result.innerHTML += value;
    } else {
      result.innerHTML += value;
    }
  });
});

function calculate() {
  result.innerHTML = eval(result.innerHTML);
}

clear.addEventListener("click", () => {
  result.innerHTML = "";
});
