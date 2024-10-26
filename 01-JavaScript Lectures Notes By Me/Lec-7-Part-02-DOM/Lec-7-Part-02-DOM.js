// DOM Part 02


// DOM MANIPULATION
// Attributes: HTML k kisi b element me add additional information ko attribute kehty hen. like "<p></p>" is a tag but jab hum is me class add krty hen "<p class="box">" to yahan class aik attribute hota hai.
// 01: How to get the value of attributes?
// -1) getAttribute(attr) "used to get the attribute value"
// -2) setAttribute(attr, value) "used to set/change  the attribute value"

// 02: style--- node.style --- How to apply styling using JavaScript
// 03: How can we Insert OR add new Elements using JavaScript DOM?
// 04: How to delete an element using JS DOM?




// 01: How to get the value of attributes?
// -1) getAttribute(attr) "used to get the attribute value"
let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);
// NOTE: ab is me jab attribute ki value ko access krna hia to us k lye hum id ka name nahi likhen gen bal k "Id" itself lekhen gen.

let nameValue = div.getAttribute("name");
console.log(nameValue);

// -2) setAttribute(attr, value) "used to set/change  the attribute value"
// setAttribute(attr, value) me hum pehly attr ko access kren gen then uski new value pass kren gen.
let para = document.querySelector("p");
console.log(para.setAttribute("para", "newClass"));

// 02: style--- node.style --- How to apply styling using JavaScript
let text = document.querySelector("p").style.backgroundColor = "pink";
let text2 = document.querySelector("p").style.fontSize = "22px";


// 03: How can we Insert OR add new Elements using JavaScript DOM?
// DOM me new element ko add krny ka 2 steps process hota hai. these are:
// 1: Pehly us specific element ko "Create" krna hota hai 2: phr usy hum "Add" krty hen
// Follow this steps to create a new element:
// let el = document.createElement("yahan hum apna new tag or element name likhty hen");
let newBtn = document.createElement("button");
newBtn.innerText = "Hello click me!";
// console.log(newBtn); yahan tak button abi create hva hai ab isy DOM pe display kesy krna hai wo process nechy likha hai. There are four main methods to display new elements in DOM:
// 1: node.append(el) adds at the end of node (inside)
// 2: node.prepend(el) adds at the start of node (inside)
// 3: node.before(el) adds before the node (outside)
// 4: node.after(el) adds after the node (outside)



// 1: node.append(el) adds at the end of node (inside)
// js element k last me hum inside me new element add krna chahty hen us node ko select kr k .append(pass new element here)
// For Example
let newEl = document.createElement("button");
newEl.innerText = "Click me!";
console.log(newEl);

let divv = document.querySelector(".addNewTag");
divv.append(newEl); 

// 2: node.prepend(el) adds at the start of node (inside)
let newEl2 = document.createElement("button");
newEl2.innerText = "Click me!";
console.log(newEl2);

let divv2 = document.querySelector(".addNewTag");
divv.prepend(newEl2); 

// 3: node.before(el) adds before the node (outside)
let newEl3 = document.createElement("button");
newEl3.innerText = "Click me!";
console.log(newEl3);

let divv3 = document.querySelector(".addNewTag");
divv.before(newEl3); 

// 4: node.after(el) adds after the node (outside)
let newEl4 = document.createElement("button");
newEl4.innerText = "Click me!";
console.log(newEl4);

let divv4 = document.querySelector(".addNewTag");
divv.after(newEl4); 

// 04: How to delete an element using JS DOM?
// we use node.remove() to remove an element from DOM
// for example
let myPara = document.querySelector(".ppp");
myPara.remove();

