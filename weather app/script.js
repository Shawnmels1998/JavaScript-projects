const api = {
  key: "API KEY",
  base: "https://api.openweathermap.org/data/2.5/",
};

const searchInput = document.querySelector(".search");
const btn = document.querySelector(".btn");
btn.addEventListener("click", fetchData);

function fetchData(event) {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    getData(searchTerm);
  }
}

async function getData(searchTerm) {
  try {
    const response = await fetch(
      `${api.base}weather?q=${searchTerm}&units=metric&appid=${api.key}`
    );
    const data = await response.json();
    displayData(data);
  } catch (error) {
    displayError("An error occurred while fetching the weather data.");
  }
}

function displayData(response) {
  const error = document.querySelector(".error");
  const city = document.querySelector(".city");
  const date = document.querySelector(".date");
  const temp = document.querySelector(".temp");
  const weather = document.querySelector(".weather");
  const tempRange = document.querySelector(".temp-range");
  const weatherIcon = document.querySelector(".weather-icon");

  if (response.cod === "404") {
    displayError("Please enter a valid city");
  } else {
    const { name, sys, main, weather: weatherData } = response;

    error.textContent = "";
    city.innerText = `${name}, ${sys.country}`;
    date.innerText = formatDate(new Date());
    temp.innerHTML = `Temp: ${Math.round(main.temp)} <span>°C</span>`;
    weather.innerText = `Weather: ${weatherData[0].main}`;
    tempRange.innerText = `Temp Range: ${Math.round(
      main.temp_min
    )}°C / ${Math.round(main.temp_max)}°C`;
    weatherIcon.src =
      "http://openweathermap.org/img/w/" + weatherData[0].icon + ".png";

    searchInput.value = "";
  }
}

function displayError(errorMessage) {
  const error = document.querySelector(".error");
  error.textContent = errorMessage;
  searchInput.value = "";
}

function formatDate(date) {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
}
