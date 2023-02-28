const number = document.querySelector('.number');
const btn = document.querySelector('.generate');

btn.addEventListener("click", generateNumber);

function generateNumber() {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    // console.log(randomNumber);
    number.innerHTML = randomNumber;
}


// Math.floor(Math.random() * (max - min  + 1)) + min















// const rand = Math.floor(Math.random() * 10 + 1);

// console.log(rand);
