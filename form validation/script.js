const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 5, 16);
  checkLength(password, 8, 16);
  checkEmail(email);
  matchPassword(password, password2);
});

const checkRequired = (inputAll) => {
  inputAll.forEach((input) => {
    input.value.trim() === ""
      ? showError(input, `${getFieldName(input)} is required`)
      : showSuccess(input);
  });
};

const checkLength = (input, min, max) => {
  input.value.length < min
    ? showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    : input.value.length > max
    ? showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    : showSuccess(input);
};

const checkEmail = (input) => {
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  re.test(input.value.trim()) ? showSuccess(input) : showError(input, "Email is not valid");
};

const matchPassword = (input1, input2) => {
  input1.value !== input2.value ? showError(input2, "Passwords do not match") : null;
};

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};
