const passwordInput = document.querySelector("#password");
const togglePasswordBtn = document.querySelector("#eye");

togglePasswordBtn.addEventListener("click", togglePasswordVisibility);

function togglePasswordVisibility() {
  const isPasswordVisible = passwordInput.type === "text";
  const newPasswordType = isPasswordVisible ? "password" : "text";
  const eyeIconClassToRemove = isPasswordVisible ? "fa-eye-slash" : "fa-eye";
  const eyeIconClassToAdd = isPasswordVisible ? "fa-eye" : "fa-eye-slash";
  
  updatePasswordVisibility(newPasswordType);
  updateEyeIconClass(eyeIconClassToRemove, eyeIconClassToAdd);
}

function updatePasswordVisibility(newType) {
  passwordInput.type = newType;
}

function updateEyeIconClass(classToRemove, classToAdd) {
  togglePasswordBtn.classList.remove(classToRemove);
  togglePasswordBtn.classList.add(classToAdd);
}
