const galleryFilter = document.querySelector(".gallery-filter");
const galleryImages = document.querySelectorAll(".image");

galleryFilter.addEventListener("click", (e) => {
const target = e.target;
if (target.classList.contains("filter-gallery")) {
const activeFilter = galleryFilter.querySelector(".active");
activeFilter.classList.remove("active");
target.classList.add("active");

const filter = target.dataset.filter;
galleryImages.forEach((image) => {
  image.style.display = (filter === "all" || image.classList.contains(filter)) ? "block" : "none";
});
}
});
