// OOP by Shradha Khapra 
// Objects and Classes and along with prototype by shradha khapra


//&& 1: Classes:
// Classes basically aik object ko bnany ka aik template deti hen yani k isy blueprint b kehty hen. like cars factories. in other words: class is a program-code template for creating object.
// this is the way to write a class code:
// class myClass {
//     constructor(){

//     }

//     myMethod(){

//     }
// }
// let myObj = new myClass();

// This is class:
class ToyotaCar {
    start(){
        console.log('start');
    }

    stop(){
        console.log('stop');
    }
};

// now this is the way to create an object using above class:
let fortuner = new ToyotaCar();



//&& 2: constructor():
// ye hmari class k ander aik special method hota hai. or ye aik reserved keyword.
// Note: agr hum apni class me koi constructor na b bnaen to javascript isy automatically hmari class me bana dy ga.

