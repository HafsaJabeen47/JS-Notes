// 01: OPERATORS 
// Write a program that takes two numbers as input and displays their sum, difference, product, and quotient.
let pro1 = 345;
let pro2 = 689;

let sum = pro1 + pro2;

console.log(sum);

// Create a program that checks whether a number is even or odd using the modulus operator (%)

let num = 27890;

if(num % 2 === 0 ) {
    console.log("This is Even Number");
}else{
    console.log("This is Odd Number");
}

// Given two variables, use the +=, -=, *=, and /= operators to update their values and print the results.
let a = 10;
let b = 5;

console.log("This is actual value", a + b);

console.log("plus equal to", a += b);
console.log("minus equal to", a -= b);
console.log("multiply equal to", a *= b);
console.log("divide by equal to", a /= b);


// 02: CONDITIONAL STATEMENTS
// Write a program that checks if a number is positive, negative, or zero.

let number = 7820190;

if(number % 2 === 0) {
    console.log("Number is positive");
}else if(number % 2 !== 0) {
    console.log("number is negative");
}else{
    console.log("number is nothing");
}

// ANOTHER WAY TO SOLVE ABOVE QUESTION
let numb = 20;

if (numb >= 1) {
    console.log("positive");
}else if(numb < 0){
    console.log("negative");
}else{
    console.log("number is zero");
}

// Create a program that takes a person's age and checks if they are eligible to vote (18 or older).

let age = 18;

if (age >= 15) {
    console.log("you can vote");
}else if(age <= 20) {
    console.log("you CANNOT vote");
}else{
    console.log("you are not eligible");
}

// Write a program that takes three numbers and prints the largest one.
let ab = 26;
let bc = 14;
let cd = 22;

if (ab >= bc && ab >= cd) {
    console.log("26 is large number");
}else if (ab <= bc && ab <= cd) {
    console.log("small")
}else {
    console.log("nothing")
}

// 03: FOR LOOP
// Write a program that prints the numbers from 1 to 10.
let numbr = 10;
for (let i = 1; i <= 10; i++){
    console.log("Number using For Loop", i)
};

// Create a program that prints the multiplication table of a given number.
let table = 20;

for(let i = 2; i <= 20; i = i + 2) {
    console.log("table of 2 is", i)
};

//  Write a program that calculates the factorial of a number using a loop.
let factorialNum = 50;

for(let i = 2; i <= 50; i = i + 10) {
    if(factorialNum % 2 === 0) {
        console.log("factorial number", i)
    }
}

// 04: STRINGS
// Write a program that takes a string and prints its length.
let str = "Hello World!";

console.log("string length is ",str.length);

// Create a program that checks whether a given string is a palindrome (reads the same forward and backward). -----THIS IS NEW TERM USED IN THIS QUESTION.----

// Write a program that converts a given string to uppercase and lowercase.
let str1 = "I am learning javaScript.";

console.log("uppercase", str1.toUpperCase());
console.log("uppercase", str1.toLowerCase());


// 05: ARRAYS
// Write a program that stores 5 numbers in an array and prints them.

let newArr = [11, 22, 33, 44, 55];
console.log(newArr);

// Create a program that finds the largest and smallest numbers in an array.



// 06: FUNCTIONS
// Write a function that takes two numbers as arguments and returns their sum.
function myFun(a,b) {
    return a + b
}
let result = myFun(234,567);
console.log("answer is", result);

// Create a function that takes a string and returns the number of vowels in it.
function countVowels(str) {
    let count = 0;
    for (let char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            count++;
        }
    }
    console.log(count);
}
let final = countVowels("hellopakistan");
console.log(final);


// 07: EVENTS
// -1) Click Event
// Create a button. When the button is clicked, change the background color of the page
// Solution:
let btn = document.getElementById('btn');

function btnFunc() {
    let btn = document.getElementById('btn');
    document.body.style.backgroundColor = "pink";
}

btn.addEventListener('click', btnFunc) //Done Good Job

// -2) Mouseover Event
// Create a heading (<h1>). When the mouse pointer moves over the heading, change its text color.
// Solution:
let h1 = document.querySelector('#h1');

function changeTextColor() {
    let h1 = document.querySelector('#h1');
    h1.innerText = "The color is changed of Heading One from Black to Red.";
    h1.style.color = "red";
}

h1.addEventListener('mouseover', changeTextColor); //Done Good Job

// -3) Keypress Event  //is me event ki type "input" use hvi hai to hi kam kar raha hai. mene input type ki bjay keypress kia tha to is ne output me kuch b nahi dia so type b matter krti hai.
// Create an input box. When you type in the box, display the typed text below the input field.
// Solution:
let myInput = document.querySelector('#myInput');
let displayText = document.querySelector('#displayText');

function inputFunc() {
    displayText.innerText = myInput.value;
}

myInput.addEventListener('input', inputFunc); //Done Good Job


// -4) Double-click Event
// Create an image. When you double-click on the image, hide it.
// Solution:
let img1 = document.querySelector('#img1');

function imgFunc() {
    let img1 = document.querySelector('#img1');
    img1.style.display = "none";
}

img1.addEventListener('dblclick', imgFunc); //Done Good Job