const password = document.getElementById("password");
const passwordStrength = document.getElementById("password-strength");
const criteria = {
  lowUpperCase: document.querySelector(".low-upper-case i"),
  number: document.querySelector(".number i "),
  specialChar: document.querySelector(".special-char i "),
  eightChar: document.querySelector(".eight-char i")
};
const showPassword = document.querySelector(".show-pass");
const eyeIcon = document.querySelector("#eye");

let state = false;

showPassword.addEventListener("click", togglePassword);
eyeIcon.addEventListener("click", toggleEyeIcon);
password.addEventListener("keyup", () => checkPasswordStrength(password.value));

function togglePassword() {
  state = !state;
  password.setAttribute("type", state ? "text" : "password");
}

function toggleEyeIcon() {
  eyeIcon.classList.toggle("fa-eye-slash");
}

function checkPasswordStrength(password) {
  let strength = 0;

  for (const [key, value] of Object.entries(criteria)) {
    if (password.match(getCriteriaRegex(key))) {
      strength++;
      addCheck(value);
    } else {
      removeCheck(value);
    }
  }

  passwordStrength.style.width = `${strength * 25}%`;
  passwordStrength.className = `progress-bar ${
    strength === 4 ? "bg-success" : strength === 3 ? "bg-primary" : strength === 2 ? "bg-warning" : "bg-danger"
  }`;
}

function getCriteriaRegex(criteriaName) {
  switch (criteriaName) {
    case "lowUpperCase":
      return /([a-z].*[A-Z])|([A-Z].*[a-z])/;
    case "number":
      return /([0-9])/;
    case "specialChar":
      return /([!,%,&,@,#,$,^,*,?,_,~])/;
    case "eightChar":
      return /^.{8,}$/;
    default:
      throw new Error(`Invalid criteria: ${criteriaName}`);
  }
}

function addCheck(charRequired) {
  charRequired.classList.remove("fa-circle");
  charRequired.classList.add("fa-check");
}

function removeCheck(charRequired) {
  charRequired.classList.remove("fa-check");
  charRequired.classList.add("fa-circle");
}
