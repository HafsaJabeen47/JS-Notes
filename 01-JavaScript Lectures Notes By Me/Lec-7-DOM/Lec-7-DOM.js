// DOM JavaScript
// 01: Window Object: ye jS me console window me by default hoti hai. It is browser's object and created automatically by browser. It is a global object with lots of properties and methods.
// 02: What is DOM? it is Document Object Model. HTML ko JavaScript me access krny ky kam ata hai. iska structure aik tree ki tran hota hai. NOTE: tree k adnder hr aik box ko "Node" kehty hen or her aik Node hmary lye aik "Object" hota hai.

// 03: DOM Manipulation: How to access and select HTML elements using DOM in JavaScript?
// -1) Selecting with ID
// -2) Selecting with CLASS
// -3) Selecting with TAG
// -4) Query Selector  -----used to select "First Element"------ Quesry selector hamen aik "Node List" return krta hai.
// -5) Query Selector ALL  -----used to select "All Elements"------
// NOTE: query selector me jab ID ko arget krty hen to phr query selector all ka concept work nahi krta.

// 04: How to check/get and change/set/update values of our HTML elements using DOM propertise.
// THESE ARE FOUR MAIN PROPERTIES TO ACCESS ELEMENTS IN JAVASCRIPT
// -1) tagName: return tag for element nodes
// -2) innerText: returns the text content of the element and all its children ---only text---
// -3) innerHTML: returns the plain text or HTML contents in the element.  ---HTML related tags---
// -4) textContent: returns textual content even for hidden elements. 





// 03: -1) Selecting with ID
let heading = document.getElementById("heading");
console.log(heading);

// 03: -2) Selecting with CLASS
// ye hmary lye HTML collection ko return krta hai. HTML collection b aik array jesa hi hota hai is me array ki tran indexes, length proprty and bohat sary methods b hoty hen. 
// NOTE: HTML collection exactly array ki tran nahi hota lekn similar to array hota hai.
let heading2 = document.getElementsByClassName("heading-class");
console.log(heading2);

// 03: -3) Selecting with TAG
let parahas = document.getElementsByTagName("p");
console.log(parahas);

// -4) Query Selector -----Using Tag-----
// NOTE: is me hm apni ID b pass kr skty hen, tag b pass kr skty hen, or apni class b pass kr skty hen.
// its returns only "First Element"
let firstEl = document.querySelector("p");
console.log(firstEl);

// -5) Query Selector ALL -----Using Tag-----
// NOTE: is me hum sary elements ko access kr skty hen using document.querySelectorAll 
// Quesry selector hamen aik "Node List" return krta hai.
let elements = document.querySelectorAll("p");
// console.log(elements);
console.dir(elements);

//  -4) Query Selector -----Using Class-----
// quesry selector me hum class ko "dot" se or id ko "hash" se likhty hen like this:

let firstClass = document.querySelector(".myParah");
console.dir(firstClass);
console.log(firstClass.tagName);

// quesry selector me class ko "dot" k sath class name likh ker access krty hen.
let allClass = document.querySelectorAll(".myParah");
console.dir(allClass);
console.log(allClass.tagName);

// NOTE: query selector me jab ID ko arget krty hen to phr query selector all ka concept work nahi krta.
let myButton = document.querySelector("#myBtn");
console.dir(myButton);


// 04: How to check/get and change/set/update values of our HTML elements using DOM propertise.
// -1) tagName: return tag for element nodes
// mtlb jab hum kisi element ko varible me store krwaty hen to us variable k through hum apna tagName return kr skty hen like this.
// kisi b element k atag name print krwany k lye hun .tagName likhty hen
let btn = document.querySelector(".btn");
console.dir(btn);
console.log(btn.tagName);


// HOW TO ACCESS NODES CHILDREN IN JS DOM
let learnNode = document.querySelector(".node").children;
console.log(learnNode);

// HOMEWORK PROBLEM: what is text Node? what is comment node? what is element node?
// HOMEWORK PROBLEM: Read about first child, last child, and children

// -2) innerText: returns the text content of the element and all its children
// innerText me pure textual content ata or jab k innerHTML me tags k sath text hota hai. important for interview question difference between innerText and InnerHTML
let navbar = document.querySelector("#nav");
console.log(navbar.innerText);
// console.log(navbar);


// -3) innerText: returns the text content of the element and all its children ---HTML releated tags---

let navigation = document.querySelector("#nav").innerHTML;
// console.log(navigation.innerHTML);
// console se b same out put aya or esy b


// NOTE IMPORTANT: document.querySelector("class/id").innerText = "add new text here"; ----set value---
// NOTE IMPORTANT: document.querySelector("class/id").innerHTML = "add new tag here";  ----set value----

// -4) textContent: returns textual content even for hidden elements. 
// textContent hidden elements k lye use hota like agr hum "display: none/hidden;" ko use krty hen to usko JavaScript me hum "variableName.textContent" se dekh skty hen.

let butn = document.querySelector("#myBtn");
console.log(butn.textContent);



// DOM PRACTICE QUESTIONS 01
let headingTwo = document.querySelector("h2");
console.log(headingTwo);

headingTwo.innerText = headingTwo.innerText + " from Apna College Students."

// DOM PRACTICE QUESTIONS 02
let divs = document.querySelectorAll(".box");
divs[0].innerText = divs[0].innerText + " New Unique div one";
divs[1].innerText = "New Unique div two";
divs[2].innerText = "New Unique div three";