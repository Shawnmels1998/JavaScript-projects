const search = document.querySelector("input");
const form = document.querySelector("form");
const searchResults = document.querySelector(".results");
const errorMsg = document.querySelector(".alert");
const line = document.querySelector("hr");

const apiURL =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=";

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const searchValue = search.value;
  if (searchValue === "") {
    displayErrorMessage("Search cannot be empty, please enter a search term.");
  } else {
    getResult(searchValue);
  }
}

function displayErrorMessage(msg) {
  errorMsg.style.display = "block";
  line.style.display = "block";
  errorMsg.textContent = msg;
}

async function getResult(searchValue) {
  const response = await fetch(apiURL + searchValue);
  const { query } = await response.json();

  if (query.search.length === 0) {
    return displayErrorMessage("Invalid search, please enter another search term.");
  } else {
    displayResults(query.search);
  }
}

function displayResults(results) {
  line.style.display = "block";
  let output = "";
  results.forEach((result) => {
    const resultURL = `https://en.wikipedia.org/?curid=${result.pageid}`;
    output += `
      <div class="result p-2">
        <a href="${resultURL}" target="_blank" rel="noopener" class="h3 fw-bold">${result.title}</a>
        <br />
        <a href="${resultURL}" target="_blank" rel="noopener" class="fs-5 text-success">${resultURL}</a>
        <p class="fs-5">${result.snippet}</p>
      </div>
    `;
  });
  searchResults.innerHTML = output;
}
