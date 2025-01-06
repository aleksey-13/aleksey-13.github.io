const form = document.getElementById("form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";

  const small = formControl.querySelector("small");
  small.textContent = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(String(input.value.trim()).toLowerCase())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

function checkLength(input, min, max) {
  if (input.value.length >= min && input.value.length <= max) {
    showSuccess(input);
  } else {
    showError(
      input,
      `${getFieldName(input)} must be between ${min} and ${max}`
    );
  }
}

function checkPasswordMatch(input1, input2) {
  if (input1.value.trim() !== input2.value.trim() || input2.value.trim() === '') {
    showError(input2, "Passwords do not match");
  } else {
    showSuccess(input2);
  }
}

function getFieldName(input) {
  const formControl = input.parentElement;
  const label = formControl.querySelector("label");

  return label.textContent;
}

function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Event listeners
form.addEventListener("submit", (e) => {

    checkRequired([
        usernameInput,
        emailInput,
        passwordInput,
        confirmPasswordInput,
    ]);

  checkLength(usernameInput, 3, 15);
  checkLength(passwordInput, 6, 25);
  checkEmail(emailInput);
  checkPasswordMatch(passwordInput, confirmPasswordInput);

  e.preventDefault();
});
