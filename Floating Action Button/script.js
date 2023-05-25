const fab = document.getElementById("fab");
const fabBtns = document.querySelector(".fab-btns");

const toggleFabBtns = () => {
  fabBtns.classList.toggle("show");
};

fab.addEventListener("click", toggleFabBtns);
