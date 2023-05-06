const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const description = accordion.nextElementSibling;
    const allDescriptions = document.querySelectorAll(".desc");
    const activeAccordions = document.querySelectorAll(".accordion.active");

    if (description.style.maxHeight) {
      description.style.maxHeight = null;
      accordion.classList.remove("active");
    } else {
      activeAccordions.forEach((activeAccordion) => {
        activeAccordion.classList.remove("active");
      });

      allDescriptions.forEach((desc) => {
        desc.style.maxHeight = null;
      });

      description.style.maxHeight = description.scrollHeight + "px";
      accordion.classList.add("active");
    }
  });
});
