const inputText = document.querySelector('.input-text').value
const inputPassword = document.querySelector('.input-password')
const form = document.querySelector('.form')
const button = document.querySelector('.show-password');

let showPassword = false;

form.addEventListener("submit", (e) => {
    e.preventDefault();



})


button.addEventListener("click", (e) => {


    if (!showPassword) {
        inputPassword.type = 'text';
        showPassword = true;
    }
    else {
        inputPassword.type = "password";
        showPassword = false;
    }



})




