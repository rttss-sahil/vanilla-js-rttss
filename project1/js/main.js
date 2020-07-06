const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show Error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show Success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Is valid email
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!re.test(input.value.trim())) {
    showError(input, '*Not Valid')
  } else{
      showSuccess(input);
  }
}

//Get Name
function getFieldName(item) {
  return item.id.charAt(0).toUpperCase() + item.id.slice(1);
}

//Check Required
function checkRequired(inputArr) {
  inputArr.forEach((item) => {
    if (item.value.trim() == "") {
      showError(item, `*${getFieldName(item)} Required`);
    } else {
      showSuccess(item);
    }
  });
}

//Check Length
function checkLength(inputArr, min, max) {
  inputArr.forEach(function (input) {
    if (input.value.length < min) {
      showError(
        input,
        `${getFieldName(input)} must be atleast ${min} characters`
      );
    } else if (input.value.length > max) {
      showError(
        input,
        `${getFieldName(input)} must be less than ${max} characters`
      );
    } else {
      showSuccess(input);
    }
  });
}


//check Password
function checkPassword(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords don\'t match')
    }
}

//Event Listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength([username], 3, 15);
  checkLength([password, password2], 6, 25);
  checkEmail(email);
  checkPassword(password, password2);
});
