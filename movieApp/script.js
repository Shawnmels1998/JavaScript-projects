 const apiURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=022d60649e31667fbe94d0daa7ba204f&page=1";
 const searchAPI = "https://api.themoviedb.org/3/search/movie?api_key=022d60649e31667fbe94d0daa7ba204f&query=" ;
 const imgPATH = "https://image.tmdb.org/t/p/w500";

 let moviesDiv = document.querySelector(".movies");
 let form = document.querySelector("form");
 let search = document.querySelector(".search");

getMovies(apiURL);

 async function getMovies(url) {
       const res = await fetch(url);
       const data = await res.json();

    console.log(data.results);

    displayMovies(data.results)
 }

//  display movies

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
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    moviesDiv.innerHTML = "";

    const inputVal = search.value;

    if(inputVal) {
        getMovies(searchAPI + inputVal);
        search.value = "";
    }
})



