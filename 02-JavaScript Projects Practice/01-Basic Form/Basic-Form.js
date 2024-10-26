// get element by using their Id OR Class and store in Variables
let subBtn = document.querySelector('#sub-btn');
let fName = document.querySelector('#fname');
let lName = document.querySelector('#fname');
let email = document.querySelector('#email');
let pwd = document.querySelector('#pwd');
let signUp = document.querySelector('#sign-up');


// Store span error in Variables
let fNameError = document.querySelector('#fname-error');
let lNameError = document.querySelector('#lname-error');
let emailError = document.querySelector('#email-error');
let pwdError = document.querySelector('#pwd-error');

subBtn.addEventListener('click', () => {
    subBtn.innerHTML = 'Log out';
    subBtn.style.backgroundColor = 'pink';
    if (fName.value === '') {
        fNameError.innerHTML = '*Name is required';
    }

    if (lName.value === '') {
        lNameError.innerHTML = '*Required';
    }

    if (email.value === '') {
        emailError.innerHTML = '*This feild is required';
    }

    if (pwd.value === '') {
        pwdError.innerHTML = '*Must Required';
    }
    signUp.innerHTML = 'Read More';

});

signUp.addEventListener('click', () => {
    signUp.innerHTML = '<a href="https://www.google.com.pk/?gws_rd=cr&ei=J0bjVczVOsu7ygOOq4LwDg">Click here</a>'; //isi line me rehty hvy isy style kesy kren gen ya alg se css me ja kr styling krni pary gi? me list style none krna chah rahi. but HTML me ye element visible nahi hai q k mene ye element yahan add kia hai.

});