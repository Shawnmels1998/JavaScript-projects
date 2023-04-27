const navList = document.querySelector(".nav-list");
const links = navList.querySelectorAll(".link");

navList.addEventListener("click", (event) => {
  const target = event.target;
  const navLink = target.closest(".link");

  if (navLink && links.includes(navLink)) {
    links.forEach((link) => link.classList.remove("active"));
    navLink.classList.add("active");
  }
});
