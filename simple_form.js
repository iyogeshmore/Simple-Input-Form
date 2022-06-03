// UC1- First name starts with Cap and has minimum 3 characters

const NAME_REGEX = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$'); 
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function() {

    if (NAME_REGEX.test(text.value)) {
        textError.textContent = "";
    } else {
        textError.textContent = "Name Is Incorrect!";
    }
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});

//UC2- enter a valid email, Email has 3 mandatory parts (abc, bl & co) and 2 optional (xyz & in) with precise @ and . positions

const EMAIL_REGEX = RegExp('^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$');
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function() {
    if (EMAIL_REGEX.test(email.value)) {
        emailError.textContent = "";
    } else {
        emailError.textContent = "Email Is Incorrect!";
    }
});

//UC3- Mobile Format -E.g. 91 9919819801 -Country code follow by space and 10 digit number

const PHONE_REGEX = RegExp('^[0-9]{1,2}\\s{1}[7-9]{1}[0-9]{9}$');
const telephone = document.querySelector('#tel');
const telephoneError = document.querySelector('.tel-error');
telephone.addEventListener('input', function() {
    if (PHONE_REGEX.test(telephone.value)) {
        telephoneError.textContent = "";
    } else {
        telephoneError.textContent = "Telephone Number Is Incorrect";
    }
});

// UC4- As a User need to follow pre-defined Password rules.
//Rule1 – minimum 8 Characters   //   Rule2 – Should have at least 1 Upper Case
// Rule3 – Should have at least 1 numeric number in the password   //   Rule4 – Has exactly 1 Special Character

const PASSWORD_REGEX = RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=.{8,}$)[a-zA-Z0-9]*[@#$%^&-+=()][a-zA-Z0-9]*$')
const password = document.querySelector('#pwd');
const passwordError = document.querySelector('.pwd-error');
password.addEventListener('input', function() {
    if (PASSWORD_REGEX.test(password.value)) {
        passwordError.textContent = "";
    } else {
        passwordError.textContent = "Password Is Incorrect! "
    //   + " A minimum 8 characters password contains a combination of"+
    //    " uppercase and lowercase letter and number & one special character are required.";
    }
});