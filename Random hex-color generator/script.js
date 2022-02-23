const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");

btn.addEventListener("click", generateColor);

function generateColor() {
    const randomColor = Math.random().toString(16).slice(2,8);
    // console.log(randomColor);
    document.body.style.backgroundColor = "#" + randomColor;
    hex.innerHTML = "#" + randomColor;
}