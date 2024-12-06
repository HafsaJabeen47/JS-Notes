// Arrays New Methods Explored By Me from W3School:

//&& 1: array.indexOf();
// The indexOf() method searches an array for an element value and returns its position.

let fruits = ['apple', 'mango', 'orange', 'pineApple'];
let findPosition = fruits.indexOf('mango');

console.log(findPosition); // mango is at 1 position og array



//&& 2: array.toString();
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

let fruits2 = ['apple', 'mango', 'orange', 'pineApple'];
let getToString = fruits2.toString();

console.log(getToString); // apple,mango,orange,pineApple



//&& 3: array.length();
// The length property returns the length (size) of an array:

let fruits3 = ['apple', 'mango', 'orange', 'pineApple'];
let getLength = fruits3.length;

console.log(getLength); // 4



//&& 4: array.map();
// Map method is used to create a new array by applyling a function to each element of an existing array. it does not change the original array. Map method is work like a foreach loop. but for each loop does not create a new array.

let num = [3, 5, 7, 9, 11, 13, 15];
let newNumSquare = num.map((val)=>{
    return val * val;
});

console.log(num); // [3, 5, 7, 9, 11, 13, 15]
console.log(newNumSquare); // [9, 25, 49, 81, 121, 169, 225]



//&& 5: array.filter();
// The filter() method creates a new array filled with elements that pass a test provided by a function. And it does not change the original array.

let ages = [12, 40, 25, 10, 50, 34, 67, 8, 47];
let findAge = ages.filter((val)=>{
    return val >= 18;
});

console.log(ages);
console.log(findAge);
