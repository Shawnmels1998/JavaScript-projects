// Use destructuring assignment to simplify getting references to DOM elements
const [username, dob, btn, showName] = [  "#username",  "#dob",  ".btn",  ".u-name",].map((selector) => document.querySelector(selector));

// Define the array of days per month using a const instead of let
const DAYS_PER_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Add an event listener to the button element with an arrow function instead of a named function
btn.addEventListener("click", (e) => {
  e.preventDefault();

  // Get the current date and the user's inputted date of birth
  const today = new Date();
  const dobInput = new Date(dob.value);

  // Validate the input date and return early if it is invalid
  const isInvalidDate =
    dobInput.getFullYear() > today.getFullYear() ||
    (dobInput.getMonth() >= today.getMonth() &&
      dobInput.getFullYear() === today.getFullYear() &&
      dobInput.getDate() > today.getDate());
  if (isInvalidDate) {
    alert("Invalid date");
    return;
  }

  // Calculate the user's age in years, months, and days
  let ageInYears = today.getFullYear() - dobInput.getFullYear();
  let ageInMonths =
    today.getMonth() -
    dobInput.getMonth() +
    12 * (ageInYears - (today.getDate() < dobInput.getDate() ? 1 : 0));
  let ageInDays =
    today.getDate() -
    dobInput.getDate() +
    (ageInMonths % 12 === 1 ? DAYS_PER_MONTH[ageInMonths - 2] : 0);

  // Display the calculated age in the DOM
  showName.textContent = username.value;
  document.querySelector(".age-year").textContent = ageInYears + "Years";
  document.querySelector(".age-month").textContent = ageInMonths + "Months";
  document.querySelector(".age-day").textContent = ageInDays + "Day";
});
