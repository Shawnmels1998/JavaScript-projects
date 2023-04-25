const passwordInput = document.querySelector("#password");
const togglePasswordBtn = document.querySelector("#eye");

function togglePasswordVisibility() {
  const isPasswordVisible = passwordInput.type === "text";
  passwordInput.type = isPasswordVisible ? "password" : "text";
  const eyeIconClassToReplace = isPasswordVisible ? "fa-eye-slash" : "fa-eye";
  const eyeIconClassToReplaceWith = isPasswordVisible ? "fa-eye" : "fa-eye-slash";
  togglePasswordBtn.classList.replace(eyeIconClassToReplace, eyeIconClassToReplaceWith);
}

togglePasswordBtn.addEventListener("click", togglePasswordVisibility);
