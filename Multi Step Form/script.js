const formItems = document.querySelectorAll(".form-item");
const buttonPrev = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-next");
const steps = document.querySelectorAll(".step");

let currentFormItem = 0;
showFormStep(currentFormItem);

buttonPrev.style.display = "none";
steps[currentFormItem].style.backgroundColor = "#1e9df7";

function showFormStep(stepIndex) {
  formItems.forEach((item, index) => {
    if (index === stepIndex) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function updateButtonLabels() {
  if (currentFormItem === 0) {
    buttonPrev.style.display = "none";
  } else {
    buttonPrev.style.display = "inline-block";
  }
  if (currentFormItem === formItems.length - 1) {
    buttonNext.innerHTML = "Submit";
  } else {
    buttonNext.innerHTML = "Next";
  }
}

function updateStepIndicators() {
  steps.forEach((step, index) => {
    if (index < currentFormItem) {
      step.style.backgroundColor = "#cfd2d4";
    } else if (index === currentFormItem) {
      step.style.backgroundColor = "#1e9df7";
    } else {
      step.style.backgroundColor = "";
    }
  });
}

buttonNext.addEventListener("click", () => {
  if (currentFormItem < formItems.length - 1) {
    currentFormItem++;
    showFormStep(currentFormItem);
    updateButtonLabels();
    updateStepIndicators();
  } else {
    // Validate the form
    alert("Form submitted successfully");
  }
});

buttonPrev.addEventListener("click", () => {
  if (currentFormItem > 0) {
    currentFormItem--;
    showFormStep(currentFormItem);
    updateButtonLabels();
    updateStepIndicators();
  }
});
