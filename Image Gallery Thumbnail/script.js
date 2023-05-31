const imgLarge = document.getElementById("large-img");
const productImages = Array.from(document.querySelectorAll(".img-small img"));

console.log(productImages.length);

function handleImageClick(event) {
  const src = event.target.getAttribute("src");
  imgLarge.src = src;
}

productImages.forEach((image) => {
  image.addEventListener("click", handleImageClick);
});
