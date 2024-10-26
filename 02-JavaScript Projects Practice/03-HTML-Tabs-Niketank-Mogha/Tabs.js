let NavLogIn = document.querySelector('#nav-log-in');
let Wrapper = document.querySelector('.wrapper');
let Btu = document.querySelector('.btu');
let b2 = document.querySelector('#b2');
let signupBtn = document.querySelector('.signup-btn');
let loginBtn = document.querySelector('.login-btn');

let Nav = document.querySelectorAll('.nav-links');
let Active = document.querySelector('#active');


// Errors
let emailID = document.querySelector('#email-ID');
let emailIDError = document.querySelector('#email-ID-Error');

let passwordID = document.querySelector('#password-ID');
let passwordIDError = document.querySelector('#password-ID-Error');


NavLogIn.addEventListener('click', (e) => {
    Wrapper.style.display = 'flex';
    e.preventDefault();
    b2.classList.add('btu');
    Btu.classList.remove('btu');
    document.getElementsByTagName('a')[3].classList.add('active-anchor');
    NavLogIn.style.color = 'black';
    document.getElementsByTagName('a')[0].removeAttribute('active');
    Active.style.backgroundColor = 'transparent';
    Active.style.boxShadow = 'none';
    Active.style.color = 'white';

    
});


// 2nd task
let h2 = document.querySelector('.h2');
let color = document.querySelector('#color');
let secLogIn = document.querySelector('#sec-log-in');

Btu.addEventListener('click', () => {
    b2.classList.remove('btu');
    Btu.classList.add('btu');
    h2.innerText = 'Create Your Account';
    color.style.display = 'flex';
    secLogIn.innerText = 'Continue';
    secLogIn.style.fontSize = '14px';
    secLogIn.style.fontWeight = 'normal';

});

// 3rd Task
secLogIn.addEventListener('click', () => {
    if(emailID.value == ''){
        emailIDError.innerText = '*Email is Mandatory';
    }
    if(passwordID.value == ''){
        passwordIDError.innerText = '*Required';
    }
});

// 4th Task
let NavLogOut = document.querySelector('#nav-log-out');

NavLogOut.addEventListener('click', (e) => {
    alert('Now you are looged out.')
});
