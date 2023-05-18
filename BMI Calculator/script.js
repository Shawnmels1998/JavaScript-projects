// BMI - kg/m2
// Normal - 18.5 -24.9
// Underweight - < 18.5
// Overweight -  25 - 29.9
// Obese -  30 and above

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");

btn.addEventListener("click", calculateBMI);

function calculateBMI(e) {
  e.preventDefault();
  const heightInput = document.querySelector(".height");
  const weightInput = document.querySelector(".weight");
  
  const height = heightInput.value;
  const weight = weightInput.value;

  if (!validateInput(height, weight)) {
    return;
  }

  const bmi = calculateBmiValue(height, weight);
  categorizeResult(bmi);
  
  reset.style.display = "block";
}

function validateInput(height, weight) {
  if (height === "" || isNaN(height)) {
    setResult("Provide a valid Height!", "orange");
    return false;
  } else if (weight === "" || isNaN(weight)) {
    setResult("Provide a valid Weight!", "orange");
    return false;
  }
  return true;
}

function calculateBmiValue(height, weight) {
  const heightInMeters = height / 100;
  return (weight / Math.pow(heightInMeters, 2)).toFixed(2);
}

function categorizeResult(bmi) {
  let message, color;
  
  if (bmi < 18.5) {
    message = `Underweight: <span>${bmi}</span>`;
    color = "orange";
  } else if (bmi < 24.9) {
    message = `Normal: <span>${bmi}</span>`;
    color = "green";
  } else if (bmi < 29.9) {
    message = `Overweight: <span>${bmi}</span>`;
    color = "blue";
  } else {
    message = `Obese: <span>${bmi}</span>`;
    color = "red";
  }
  
  setResult(message, color);
}

function setResult(message, color) {
  result.style.backgroundColor = color;
  result.innerHTML = message;
}

reset.addEventListener("click", () => {
  document.querySelector("form").reset();
  reset.style.display = "none";
  result.style.display = "none";
});

