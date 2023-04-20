
// --Convert Celsius to--
// fah = (x * 1.8) + 32;
// kelvin = x + 273.15;

// -- Convert Fah to --
// celsius = (x - 32) / 1.8;
// kelvin = (x - 32) / 1.8 + 273.15;

// -- Conver Kelvin to --
// fah = (x - 273.15) * 1.8 + 32;
// celsius = parseFloat(x) - 273.15;

const temperatureInputs = document.querySelectorAll(".temperature-input");
const form = document.querySelector("form");

form.addEventListener("input", convertTemp);

function convertTemp(e) {
  const inputValue = parseFloat(e.target.value);
  const inputUnit = e.target.dataset.unit;

  if (inputUnit === "celsius") {
    temperatureInputs.forEach((input) => {
      const unit = input.dataset.unit;
      if (unit === "fahrenheit") {
        input.value = (inputValue * 1.8) + 32;
      } else if (unit === "kelvin") {
        input.value = inputValue + 273.15;
      }
    });
  } else if (inputUnit === "fahrenheit") {
    temperatureInputs.forEach((input) => {
      const unit = input.dataset.unit;
      if (unit === "celsius") {
        input.value = (inputValue - 32) / 1.8;
      } else if (unit === "kelvin") {
        input.value = (inputValue - 32) / 1.8 + 273.15;
      }
    });
  } else if (inputUnit === "kelvin") {
    temperatureInputs.forEach((input) => {
      const unit = input.dataset.unit;
      if (unit === "celsius") {
        input.value = inputValue - 273.15;
      } else if (unit === "fahrenheit") {
        input.value = (inputValue - 273.15) * 1.8 + 32;
      }
    });
  }
}
