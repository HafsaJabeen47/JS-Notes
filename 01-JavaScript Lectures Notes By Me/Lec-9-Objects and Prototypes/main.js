// BY Shahid Naeem Lecture No: is 51 
// class and objects in javascript

// 01: What is OOP In JavaScript?
// It is an Object-Oriented Programming (OOP) in javaScript that uses objects to represent and manuplate data. In other words: classes and objects are fundamental concepts for structuring code, especially when working with OOP. it also makes code cleaner, reuseable, and easier to manage.


// 02: What is class in JS?
// A class in javascript is like a blueprint for creating objects. e.g: map of house, design of car and so on

// 03: What is an Object in JS?
// It is a key value pair and created from a class with real vlaues assigned to its properties.


// 04: how to make an object:
let car={
    brand: 'honda',
    modal: 'city',
    price: 3500000,

    // we can write a function inside the object
    myCar: function(){
        console.log('I bought a car');
    },

    // Note: function ko hum easy way me esy likhen gen.
    myCar(){
        console.log('I bought a car');
    }
};

console.log(car);
console.log(car.modal); //to get value of specific key


// 05: What is Object Prototype?
// it is a by default property of object. Basically prototype itself is an Object, which have different properties and methods.
// prototype has built-in methods itself like array.push,pop,shift,slice,map,reduce.......
// NOTE: prototype is also known as refrence of an object.


// NOTE: An array also itself is an object. "type of array is object" IMPORTANT point asked in interview


// NOTE: jab aik object ki key ko usi object k ander hi print krwana chahen to us k lye hum key k sath shuru me this. ko use kren gen: for example:
let discount={
    price: 500,

    dis(){
        console.log(`10% disocunt allowed, actual price is: ${this.price}`)
    },
};

console.log(discount.dis());


// 06: aik object k ander dusri object ko call kesy krty hen?
// jis object k ander add krwana hai pehly uska naam likhen gen then dot lgaen gen. then 2 underscore lganen gen then proto__ phr equal = or sath end pe jis ko shamil krwana uska ka naam likhen fen.
// product.__proto__=discount

let product={
    price: 5000,
};

// this is the way to call one object to inside the other object.
product.__proto__=discount;


// IMPORTANT NOTE: agr same naam k 2 functions hon aik object k ander or dusra prototype k ander to output me object wala function kam kry ga jo uski apni body me hai.


// Have to learn Constructor


