const searchIcon = document.querySelector(".fa-search");
const closeIcon = document.querySelector(".fa-times");
const searchEl = document.querySelector(".search");
const searchInput = document.querySelector(".search input");

const showSearchEl = () => {
  searchEl.style.transform = "translateX(0)";
  setTimeout(() => {
    searchEl.style.width = "30rem";
    searchInput.setAttribute("placeholder", "Search...");
  }, 1000);
};

const hideSearchEl = () => {
  searchInput.setAttribute("placeholder", "");
  setTimeout(() => {
    searchEl.style.width = "4.5rem";
    searchEl.style.transform = "translateX(200%)";
  }, 1000);
};

const handleClickSearchIcon = () => {
  searchIcon.style.transform = "translateY(200%)";
  closeIcon.style.transform = "translateY(0)";
  showSearchEl();
};

const handleClickCloseIcon = () => {
  searchIcon.style.transform = "translateY(0)";
  closeIcon.style.transform = "translateY(-200%)";
  hideSearchEl();
};

searchIcon.addEventListener("click", handleClickSearchIcon);
closeIcon.addEventListener("click", handleClickCloseIcon);
