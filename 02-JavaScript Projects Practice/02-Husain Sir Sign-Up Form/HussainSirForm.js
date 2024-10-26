// jo HTML me classes di then unhen use krny k lye pehly JS k variable me store krwaty hen 
let signUpBtn = document.querySelector('.sign-up-btn');
let signInBtn = document.querySelector('.sign-in-btn');
let nameField = document.querySelector('.name-field');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');



// added by me
let nameInput = document.querySelector('#name-input');
let emailInput = document.querySelector('#email-input');
let passwordInput = document.querySelector('#password-input');

// added by me error list
let nameError = document.querySelector('#name-error');
let emailError = document.querySelector('#email-error');
let passwordError = document.querySelector('#password-error');


// sign In button per click krny k bad kya ho to us k lye aik function bnaty hen.
signInBtn.addEventListener('click', () => {
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    text.innerHTML = 'Forget Password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
    // added by me
    if(nameInput.value == '') {
        emailError.innerHTML = '*Name is required';
        emailError.style.color = 'red';
    }
    if(nameInput.value == '') {
        passwordError.innerHTML = '*Password is required';
        passwordError.style.color = 'red';
    }

    
});

// sign Up button per click krny k bad kya ho to us k lye aik function bnaty hen.
signUpBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
    console.log("Hello world");
    nameField.style.maxHeight = '60px';
    title.innerHTML = 'Sign Up';
    text.innerHTML = 'Password Suggestions';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0)';
});
