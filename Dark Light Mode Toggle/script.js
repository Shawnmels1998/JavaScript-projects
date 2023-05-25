const toggleDarkMode = document.querySelector(".toggle-darkmode");
const toggleText = document.querySelector(".toggle-text");

let darkMode = localStorage.getItem("darkMode");

const setDarkMode = (enabled) => {
  document.body.classList.toggle("darkmode", enabled);
  toggleText.textContent = enabled ? "Light" : "Dark";
  localStorage.setItem("darkMode", enabled ? "enabled" : null);
};

const toggleDarkModeHandler = () => {
  darkMode = localStorage.getItem("darkMode");
  setDarkMode(darkMode !== "enabled");
};

if (darkMode === "enabled") {
  setDarkMode(true);
}

toggleDarkMode.addEventListener("click", toggleDarkModeHandler);
