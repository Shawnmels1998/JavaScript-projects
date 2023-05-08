const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");
const url = "http://api.icndb.com/jokes/random";

btn.addEventListener("click", getJoke);

function displayJoke(jokeText) {
  joke.innerHTML = jokeText;
}

async function getJoke() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayJoke(data.value.joke);
  } catch (error) {
    displayJoke(error.message);
  }
}
