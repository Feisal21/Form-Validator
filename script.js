const form = document.getElementById('form');
const Username = document.getElementById('Username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//  show input error message
function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group error';
    const small = formGroup.querySelector('small');
    small.innerText = message;
}
// show success outline
function showSuccess(input) {
const formGroup = input.parentElement;
formGroup.className = 'form-group success';
}
// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input)) {
        showSuccess(input);
    }else {
      
    }

}
//   check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
                showError(input,  `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }

    });
}
// check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
      showError(
        input,
        `${getFieldName(input)} must be at least ${min} characters`
      );
    } else if (input.value.length > max) {
      showError(
        input,
        `${getFieldName(input)} must be less than ${max} characters`
      );
    } else {
      showSuccess(input);
    }
  }

// get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Event Listener
form.addEventListener('submit' , function (e) { 
    e.preventDefault()   
    checkRequired( [Username, email, password, password2] );
   
    checkLength(Username, 3, 15);
    checkLength(password, 6, 25);
});