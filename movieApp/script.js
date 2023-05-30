 const apiURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=022d60649e31667fbe94d0daa7ba204f&page=1";
const searchAPI = "https://api.themoviedb.org/3/search/movie?api_key=022d60649e31667fbe94d0daa7ba204f&query=";
const imgPATH = "https://image.tmdb.org/t/p/w500";
const moviesDiv = document.querySelector(".movies");
const form = document.querySelector("form");
const search = document.querySelector(".search");

getMovies(apiURL);

async function getMovies(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayMovies(data.results);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

function displayMovies(movies) {
  moviesDiv.innerHTML = "";

  movies.forEach((movie) => {
    const div = document.createElement("div");
    div.classList.add("movie");
    div.innerHTML = `
      <div class="movie">
        <img src="${imgPATH + movie.poster_path}" alt="">
        <div class="details">
          <h2 class="title">${movie.title}</h2>
          <p class="rate">Rating: <span class="rating">${movie.vote_average}</span></p>
          <p class="overview">
            ${movie.overview}
          </p>
        </div>
      </div>
    `;
    moviesDiv.appendChild(div);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  moviesDiv.innerHTML = "";

  const inputVal = search.value.trim();

  if (inputVal) {
    getMovies(searchAPI + inputVal);
    search.value = "";
  }
});
