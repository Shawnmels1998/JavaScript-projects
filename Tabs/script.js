const tabLinks = document.getElementsByClassName("tab-link");
const allContent = document.querySelectorAll(".tab-content");

for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener("click", function (e) {
    const current = document.querySelector(".active");
    current.classList.remove("active");
    this.classList.add("active");

    const filter = e.target.dataset.filter;
    console.log(filter);

    allContent.forEach((content) => {
      content.style.display = content.classList.contains(filter) ? "block" : "none";
    });
  });
}
