const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const forgotLink = document.querySelector(".forgot-link");
const closeLink = document.querySelector(".close");
const loginSection = document.querySelector(".login");
const registerSection = document.querySelector(".register");
const forgotSection = document.querySelector(".forgot");

function showSection(sectionToShow, sectionToHide1, sectionToHide2) {
  sectionToShow.style.display = "flex";
  sectionToHide1.style.display = "none";
  sectionToHide2.style.display = "none";
}

registerLink.addEventListener("click", () => {
  showSection(registerSection, loginSection, forgotSection);
});

loginLink.addEventListener("click", () => {
  showSection(loginSection, registerSection, forgotSection);
});

forgotLink.addEventListener("click", () => {
  showSection(forgotSection, loginSection, registerSection);
});

closeLink.addEventListener("click", () => {
  showSection(loginSection, forgotSection, registerSection);
});

