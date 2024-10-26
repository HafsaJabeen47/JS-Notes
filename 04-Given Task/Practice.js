// PRACTICE QUESTION NO 01
// Calculate the sum of odd numbers greater than 10 and less than 30

let sum = 0;

for(let i = 11 ; i <= 30; i = i + 2){
    if(i % 2 !== 0){
        console.log("these are odd numbers", i);
    }
    sum += i;
}
console.log(sum);

// NOTE: without using conditional statement this is the way to calculate the sum of odd numbers
// let hum = 0;

// for(let i = 11; i <= 30; i+=2) {
//     hum += i;
// }

// console.log(hum);


// PRACTICE QUESTION NO 02
// Calculate the average of the numbers in an array of numbers
// let ar = [1, 3, 9, 15, 90];

let arr = [1, 3, 9, 15, 90];

let sumOfArr = 1 + 3 + 9 + 15 + 90;

let average = sumOfArr / arr.length;

console.log(average);


// PRACTICE QUESTION NO 03
// Create a function that receives an array of numbers and returns an array containing only the positive numbers
// let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

let ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

let newArr = [];

newArr.push(2);

function arFunction() {
    
}
