// Object Practice 

const product = {
    title : "Ball Pen",
    price : 30,
    color : "black",
    isWork : true,
}
console.log( typeof product.price)

// we can also change the value of any object's key using const like this
product.price = 10;
console.log(product.price)

// How to access keys and values from any object
console.log(Object.keys(product))
console.log(Object.values(product))

// How to emeraged two objects in one
const person1 = {
    fullName : "Alice",
    age : 35,
    color : "fair"
}

const person2 = {
    gender : "male",
    country : "Pakistan"
}

const emergedPersons = {
    ...person1, ...person2
}

console.log(emergedPersons)



// Conditional Statements using promt
// Note: Promt and alert are use for pop-up but we can enter query in promt on the other side we can not enetr in alert
// let score = prompt('Enter your score 0 100:')
// let grade;

// if (score >= 90 && score <= 100) {
//     grade = "A";
// } else if (score >= 70 && score <= 89) {
//     grade = "B"
// } else if (score >= 60 && score <= 69) {
//     grade = "C"
// } else if (score >= 50 && score <= 59) {
//     grade = "D"
// } else if (score >= 0 && score <= 49) {
//     grade = "F"
// }

// console.log("According to your score, your grade was:", grade)


// How to check ODD and EVEN number

let num = 168;

if (num % 8 === 0) {
    console.log(num,"num is even.")
} else {
    console.log(num, "is odd.")
}

// Age Checker using promt

// let age = 25;
// prompt("Enter your age")
// if (age < 30) {
//     console.log("you are mature")
// } else if (age > 18) {
//     console.log("you are young.")
// }




// Game Number
// Note: Prompt k ander number b string hi consider hoty hen is lye === !== nahi lgaen gen bal k == != lgaen gen

let gameNum = 25;

let userNum = prompt("Enter the game number:");

if (userNum == 25) {
    console.log("congratulations! you are winner")
}else {
    console.log("wrong answer")
}