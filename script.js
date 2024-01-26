const btn = document.querySelector('#create-button');
const pwd = document.querySelector('#pwd');
const pwd_confirm = document.querySelector('#confirm-pwd');
const error_message = document.querySelector('.error-message');

/* while left password field not matching display error */
pwd.addEventListener('input', () => {
    if (pwd.value === pwd_confirm.value) {
        error_message.style.visibility = 'hidden';
        pwd.setCustomValidity("");
        pwd_confirm.setCustomValidity("");
    } else {
        error_message.style.visibility = 'visible';
        pwd.setCustomValidity("Not matching");
        pwd_confirm.setCustomValidity("Not matching");
    }
});

/* while right password field not matching display error */
pwd_confirm.addEventListener('input', () => {
    if (pwd_confirm.value === pwd.value) {
        error_message.style.visibility = 'hidden';
        pwd_confirm.setCustomValidity("");
        pwd.setCustomValidity("");
    } else {
        error_message.style.visibility = 'visible';
        pwd_confirm.setCustomValidity("Not matching");
        pwd.setCustomValidity("Not matching");
    }
});