const menu = document.querySelector(".menu");
const avatar = document.querySelector(".avatar-profile img");

const handleMouseover = () => {
  menu.classList.add("active");
};

const handleMouseout = () => {
  menu.classList.remove("active");
};

avatar.addEventListener("mouseover", handleMouseover);
avatar.addEventListener("mouseout", handleMouseout);
menu.addEventListener("mouseover", handleMouseover);
menu.addEventListener("mouseout", handleMouseout);
