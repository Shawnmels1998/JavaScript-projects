const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");

btn.addEventListener("click", generateColor);

function generateColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    // console.log(randomColor);
    document.body.style.backgroundColor = "#" + randomColor;
    hex.innerHTML = "#" + randomColor;
}
