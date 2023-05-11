const userLocation = document.querySelector(".location");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  getUserLocation()
    .then(position => showPosition(position))
    .catch(error => console.error(error));
});

function getUserLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

function showPosition(position) {
  const { latitude, longitude } = position.coords;
  const message = `Latitude: ${latitude}<br>Longitude: ${longitude}`;
  userLocation.innerHTML = message;
}
