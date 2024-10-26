// JAVASCRIPT FUNCTIONS






// 1: SIMPLAE BASIC FUNCTION
function myFunction() {
    console.log("Welcome to my profile");
    console.log("I am learning JavaScript");
}
myFunction();


// 2: USE PARAMETER/VARIABLE IN FUNCTION
// NOTE: jab hum function me koi parameter/ariable ko put krty hen to us k bad jab hum function ko call krty hen. or function ko call krny k bad parentheses me apni value ko store krwaty hen jo opar function ko variable/parameter dia hota hai. like ab is function me mene "food" parameter/variable dia hai to us ki value/argument function call krty hvy add ki hai. or value ko argument b kehty hen.
// NOTE: functions me hum more than one parameters/variables ko store krwa skty hen or function call krty hvy /value/argument ko comma se seprate kr k dety hen
function myFunction2(food, num) {
    console.log(food, num);
}

myFunction2("Popcorn, Chips, Noodles, Pizza, Burger", 20 + 30);


// 3: HOW TO CALCULATE SUM OF 2 NUMBERS
function sumCalculate(num1, num2) {
    console.log(num1 + num2);
}

sumCalculate(384, 207);

// 4: HOW TO "return" KEYWORD IN FUNCTIONS
// NOTE: Return at the end aik hi value ko return krta hai. It can be a string, array, number and so on.

function sum(a, b) {
    return a + b;
}

console.log(sum(50,30));

function myFun(a, b, c, d, e, f, g, h, i, j) {
    return a+ b+ c+ d+ e+ f+ g+ h+ i+ j
}

console.log(myFun(1,2,3,4,5,6,7,8,9,10))

// 5: ARROW FUNCTIONS
// NOTE: Arrow functions also known as modern JS
// Arrow function ko execute krny k lye usy kisi variable k ander store krna pry ga.
let myArrow = (x, y) => {
    console.log("Hello World!")
};

myArrow()

// Another Example of Arrow Function
const mulArrow = (a, b) => {
    return a * b;
}

console.log(mulArrow(60,20));

// NOTE: hum arrow function me parameters pass kiye bina b kam krwa skty hen.
const myArrowFun = () => {
    console.log("Hello Coders!")
};

myArrowFun();

// PRACTICE QUESTIONS


// PRACTICE QUESTION BY HUSAIN SIR JAVASCRIPT COURSE FROM YOUTUBE
// find the percentage values of subjects
document.write("Total Subjects - 5 <br> Total Marks - 500");

function subjects(math, physics, computer, english, urdu) {
    let ObtainedMarks  = math + physics + computer + english + urdu;

    return ( ObtainedMarks / 500 ) * 100;
}

let result = subjects(77, 89, 82, 95, 72)
document.write(" <br> Percentage: ", result + "%");
// document.write(" <br> <br> Obtained Marks: ", a);

// function percentage(marks){ //marks ko to mene defined hi nahi kia to phr output thek kesy araha hai?
//     return marks/500*100;
// }

// let result = percentage(a);
// document.write("<br> <br> Marks are ", result, "% ")

let result1 = subjects(63, 17, 34, 100, 54);

document.write(" <br> Percentage: ", result1 + "%");