//write a table of 4 by using for loop


for (let i = 4; i <= 40; i = i+4) {
    console.log("4 x ${} = " + i)
};

//write a table of 204 by using for loop
// lets find out what is the output of 204 multiply by 10.
let a = 204;
let b = 10;

let c = a * b;
console.log("output = " , c);

// for loop  204 table
for (let i = 204; i <= 2040; i = i+204) {
    console.log("204 x ${} = " + i)
};


// how to find even odd numbers by using for loop
// even numbers
for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0)
    console.log(i)
};

// odd numbers
for (let i = 0; i <= 50; i++) {
    if (i % 2 != 0)
    console.log(i)
};

// how to use conditional statements
// if and else

let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
} else {
    color = "white";
}
console.log(color);

// else and if

let age = 30;

if (age > 20) {
    console.log("college going")
} else if (age < 10) {
    console.log("school going")
} 

// for-in-loop (this is used to find keys and values of an object along with arrays)
// for-in-loop by using object

let students = {
    name : "x-y-z",
    age : 25,
    domain: "information technology",
    cgpa: 3.5,
    isPass : "true",
    height : "more than 5",
    strength : 40,
}

for (let key in students) {
    console.log(key, ":", students[key])
    // console.log(students["name"])
    // console.log(students.name)  
}


// strings lecture practice question
// let fullName = prompt("enter your full name without spaces");
// let username = "@" + fullName + fullName.length;
// console.log(username);


let sum = 20;

for (let sum = 20; sum <= 100; sum++){
    console.log("sum = ", sum)
};
console.log("sum is no longer to work on loop");


let child = 40;

for (let child = 30; child <= 40; child++){
    console.log("how many students are in a class", child)
};


// for of loop

let str = "hafsajabeen";
let size = 0;

for (let val of str){
    console.log("val of str = ", val)
    size++;
};
console.log("str size of hafsajabeen = ", size);


// try to solve practice questions lecture no 3 loops
// questions no 1
// print all even numbers from 0 to 100

for (let i = 0; i <= 100; i++){
    if(i%2 == 0){
        console.log(" even numbers ", i)
    }
};

// string properties
 
// string length

let content = "hello how ae you?"

console.log(content[6]);

let stationary = {
    item : "pen",
    price : 30,
    color : "blue",
    material : "plastic",
}
// this is the way t0 write template litrals
console.log(`the price of ${stationary.item} is ${stationary.price} rupees and its color is ${stationary.color} i like it most also it is made of ${stationary.material}`);



// string methods
// how to uppercase letters use in string

let name = "hello its John here"

console.log(name.toUpperCase());

// slice method
let cut = "pakistan"

console.log("print this one and get index of 4 to 7", cut);

console.log(cut.slice(4,7))

// string concat method

let cont1 = "i am a girl my name ";
let cont2 = "is xyz and i live in lahore.";

console.log(cont1 + cont2);

console.log(cont1.concat(cont2));

// string replace method

let rep = "apple, mango, orange, banana, peach, pineapple, gawa";
console.log(rep);

console.log(rep.replace("apple", "gawa"));

// replace all

let change = "hello  heyheyhey";
console.log(change);

console.log(change.replaceAll("hey", "how are you "));

// string charAt() method

let find = "javascript";
console.log(find);

console.log("what is on index of 7 is =",find.charAt(7));


// Arrays in Javascript
// looping over an array

let fruits = ["apple", "mango","orange", "banana", "pinapple", "dates", "grapes","gawa","cheery","sweetpotato","strawberry", "lychee", "peach", "pear"]

console.log(fruits);

for (let i=0; i<fruits.length; i++){
    console.log("fruits arrays in loop", i)
};

// for of loop on an array

for (let val of fruits){
    console.log(val, val.toUpperCase() + " hello pakistan")
}

// array practice question

let marks = [85, 97, 44, 37, 76, 60];
let add = 0;

for (let val of marks){
    add += val;
}
let avg = add / marks.length;
console.log(`average marks of total class = ${avg}`);


// arrays method
// .push()

let veggies = ["potato", "tomamto", "carrot", "peace"];

console.log(veggies);
veggies.push("paneer");
console.log(veggies)

// pop method
let veggi = ["potato", "tomamto", "carrot"];
let deletedItem = veggi.pop()

console.log(veggi);
veggies.pop();
console.log(veggi)
console.log(deletedItem);

// array all methods mix practice question

let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
console.log(`list of companies ${companies}`);

// remove the first company from array
// companies.shift()
console.log(companies);

// remove uber and add ola onits place

companies.splice(2, 1, "ola");
console.log(companies);

// add amazon at the end

companies.push("amazon");
console.log(companies);
// finally completed practice question


// JS functions
// define a function

function printSomething(){
    console.log("hello this is my first function")
    console.log("lets check its run or not")
}
printSomething();
printSomething();

// math function defined by me

function sums(a, b){
 c = a + b
 return c
}
let val = sums(444, 890)
console.log(val);

function multiply(x, y, h, u){
    return x * y * h * u
}
let value = multiply(15,20,67,89,90,45,67)
console.log(value)

// arrow function
let mysum = (a, b) => {
    return a * b;
}
console.log(mysum(5, 6))


// practice question of function

function printVow(str){
    let count = 0;
    for (const char of str) {
    if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
    ) {
        count++;
    }
    }
    return count;
}

printVow("hello this is my firs panga")  //not confirm this 


// forEach loop practice question
let arr = [12, 34, 56, 78, 10]

arr.forEach((arr, idx, val) => {
    console.log(arr*arr, idx, val)
})

// filter method practice question

let number = [67, 94, 98, 78, 91, 99, 55, 89]

let newNum = number.filter((val) => {
    return val > 90;
})

console.log(newNum)

// DOM practice question
// create a new button in js and give it a text

let newBtn = document.createElement("button")
newBtn.innerText = "click me"
console.log(newBtn)

newBtn.style.backgroundColor = "red"
newBtn.style.width = "150px"
newBtn.style.height = "150px"
newBtn.style.border = "3px solid black"
newBtn.style.fontSize = "2rem"
newBtn.style.color = "white"

document.querySelector("body").prepend(newBtn);


// functions/arrow functions/annonymous functions
const myfun = (a,b) => {
    return a + b;
};
console.log(myfun(4,4))


// 24 May 2024 Friday Javascript start with practice from scratch

// Operators Practice

// Arithmatic Operators +  -  *  /  %  **
let stu1 = 20;
let stu2 = 30;

console.log("stu1 and stu2 addition", stu1 + stu2)

console.log("stu1 and stu2 subtraction", stu1 - stu2)

console.log("stu1 and stu2 multiply", stu1 * stu2)

console.log("stu1 and stu2 division", stu1 / stu2)

console.log("stu1 and stu2 remainder", stu1 % stu2)

console.log("stu1 and stu2 power", stu1 ** stu2)


let me1 = 2;
let me2 = 4;

console.log("power of me1 and me2 = ", me1 ** me2)


// Binary Operatores: works on two operands

let jhon = 100;
let tena = 300;

let totalAmountOf = jhon + tena;

console.log("Total amount of both jhon and teena is", totalAmountOf)

// Unary Operatores: workks on single operand

let tom = 30;
let jerry = 19;

let tomJerry = tom = ++jerry;
console.log("Pre Increment of Tom and Jerry is", tomJerry);

let tomJerrysub = tom + jerry--;
console.log("Pre Decrement of Tom and Jerry is", tomJerrysub)



let myage = 21;

(myage >=18)? (console.log("can drive")) : (console.log("cannot drive"))




// conditionals practice

let math = 20;
let eng = 65;
let urdu = 55;
let sst = 45;
let islamic = 35;
let bio = 25;


if (math > 25) {
    console.log("passed")
}
else {
    console.log("fail")
}


if (eng > 25 && eng < 40) {
    console.log("D")
}
else if (eng > 40 && eng < 50){
    console.log("C")
}

else if (eng > 50 && eng <= 60){
    console.log("B")
}

else {
    console.log("result")
}

if (eng < 25 || eng > 70) {
    console.log("D")
}
else if (eng > 40 || eng < 50){
    console.log("C")
}

else if (eng > 50 || eng <= 60){
    console.log("B")
}

else {
    console.log("result")
}



// basic function
function myName(){
    console.log("Hafsa Jabeen")
}

myName();

// Use parameters in functions

function className(stu1, stu2 ){
    console.log(7 + 7)
}

className();


// function with loop

function sums(){
    for (let i=1; i<=5; i++)
        console.log("hello pakistan")
}

sums()

// function with single parameter

function countNum(num) {
    console.log(num)
}

countNum(10)

// multiple parameters

function yourName(firstName, lastName) {
    let fullName = (firstName + " " + lastName)
    console.log("your name is :", fullName)
}

yourName("love", "babber")


function sumTwoNumber(number1, number2) {
    return number1 + number2;
}


let sumTwo = sumTwoNumber(3, 5);
console.log(sumTwo/2);


function listOfStudents(stud1, stud2, stud3){
    return stud1 + stud2 + stud3;
}

let total = listOfStudents(5, 10, 15);
console.log(total);


// mix strategies

function mixfun(para1, para2){
    let sum = para1 + para2; 
    for (let i=1; i<=50; i++){
        if(i == sum){
            return i;
        }
        else if(sum > i && i == 50){
            console.log('your sum value is greater than the loop limit');
        }
        
    };
   
}

let mix = mixfun(25, 25)
console.log(mix);


function printValue(start, end){
    for (let i=start; i<=end; i = i+5){
        console.log(i)
    }
}

printValue(5, 50)


// for loop practice

for (let i=0; i<=100; i = i + 5){
    console.log("for loop practice : ", i)
}



// for loop practice with basic function
function prac(){
for (let i=0; i<=100; i = i + 3){
    console.log("for loop practice : ", i)
}
}

prac();


// for loop practice with parameters function

function prac2(sec1, sec2){
    for (let i=sec1; i<=sec2; i = i + 2){
        console.log("prac2 of loop with parameters : " + i )
    }
}


// prac2(2, 50)


// for loop practice with parameters function and return function

function prac2(sec1, sec2){
    let sects = sec1 + sec2;
    for (let i=sec1; i<=sec2; i = i + 2){
        if (i == sects){
            return i;
        }
        else{
            console.log("the value of i is not correct")
        }

        
    }
}

// prac2(2, 50)

// for loop practice with parameters function and return function with logic operators

function prac2(sec1, sec2){
    let sects = sec1 + sec2;
    for (let i=sec1; i<=sec2; i = i + 2){
        if (i <= sects){
            return i;
        }
        else if (sects < i && i == 50) {
            console.log("good")
        }
    }
}

prac2(2, 50)

