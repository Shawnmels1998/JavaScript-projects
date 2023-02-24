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

})

//check required fields

function checkRequired(inputAll) {
       inputAll.forEach((input) => {
        if(input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
       })
}

// check input length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);   
    } else {
        showSuccess(input);
    }
}

// validate email
function checkEmail(input) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid");
    }
}

// check password
function matchPassword(input1, input2) {
    if(input1.value !== input2.valie) {
        showError(input2, "Passwords do not match");
    }
}

// show error message
function showError(input, message) {
     const formControl = input.parentElement;
     formControl.className = "form-control error";
     const small = formControl.querySelector("small");
     small.innerText = message;
}

// show success message

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// get field name 

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}