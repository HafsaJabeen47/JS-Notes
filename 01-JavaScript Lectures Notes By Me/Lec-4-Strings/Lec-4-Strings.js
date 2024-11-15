// JAVASCRIPT STRINGS: by Shradha Khapra
// create string      let str = "Apnacollege";
// string length      console.log(str.length);
// string indices     console.log(str[2]);
// template literals is a special type of string. We can write variables in our template literals string.
// escape characters used in string to provide next line of our string. we write \n like this
// Let str = "Apna\nCollege"
// Tab space we use \t
// NOTE: escape characters me string ki lengeth escape charatcers halan k 2 hoty hen \t lekn in ki length 1 hi count ho gi. tricky question asked in interview.let str "Apna\tCollege" iski length 12 ho gi


// STRINGS METHODS IN JS: ------methods are build in functions in strings-----
// 1: str.toUpperCase()
// 2: str.toLowerCase()
// 3: str.trim() it removes white space from starting and ending index/positions. ye bech wali spaces ko remove nahi krta.
// NOTE: javascripts strings are immuteable ye original strings kabi b change nahi hoti hamehn strings pe method apply krny k lye strig ko new variable me store krna hota hai.
// 4: str.slice(start, end?) it returns part of string lekn is me ending value consider nahi hoti suppose agr hum 0123456 starting index 1 or ending index 4 dety hen to slice me hamen 1 se 3 tak tukra mily ga 4 wala index add nahi ho ga.
// 5: str1.concat(str2) it joins str2 with str1
// 6: str.replace(searchVal, newVal) NOTE: use replaceAll to change the same words likr lolololo
// 7: str.charAt(idx) character at method

//-------------------------------------------------------------------------------------------------------

// NORMAL STRING
let str1 = 'My Name'
console.log(str1)
console.log(str1.length)
console.log(str1[3])


// TEMPLATE LITERALS
let obj = {
    item: "pen",
    price: 10,
};

let output = `The cost of ${obj.item} is ${obj.price} rupees. ${5 + 6}`
console.log(output)

// ESCAPE CHARACTERS IN STRING
let str2 = "I am a girl. I live in Lahore. \nI am from Pakistan. \nI used to do something different."
console.log(str2)

// TAB SPACE IN STRING
let space = "How to add tab space in a string. \tHere it is you can see"
console.log(space)

// ------STRINGS METHODS-------
// 1: STRINGS METHODS str.toUpperCase()
let capitalLetters = "Javscript strings";
console.log(capitalLetters.toUpperCase());

// 2: STRINGS METHODS str.toLowerCase()
let smallLetters = "Javscript strings";
// console.log(smallLetters.toLowerCase(), "small letters");
console.log(`${smallLetters.toLowerCase()} are small letters using template literal string`);

// 3: TRIM METHOD str.trim()
let str4 = "      I am learning Javascript.     ";
console.log(str4)
console.log(str4.trim());

// 4: SLICE METHOD str.slice(startind index, ending index,) NOTE: ending index add nahi hota
let myString = "HelloWorld!";
console.log(myString);
console.log(myString.slice(3, 8));

// 5: CONCAT METHOD str1.concat(str2)
let strOne = "Hello ";
let strTwo = "Pakistan";

let result = strOne.concat(strTwo);
console.log(result);

// we can concatinate two strings using + sign like this
let final = strOne + strTwo;
console.log("I am living in me country", final);

// 6: REPLACE METHOD str.replace(searchVal, newVal)
let one = "Hello World";
console.log(one);
console.log(one.replace("World", "Dunya"));

// how to replace all 
let oneAll = "Helololololo";
console.log(oneAll.replaceAll("lo", "y"));

// 7: CHARACTER AT METHOD str.charAt(index) how to find charatcer using index
let userName = "UserName";
console.log(userName);
console.log(userName.charAt(4));

// STRINGS PRACTICE QUESTION
 let fullName = prompt("Entery your Full Name without space");

 let useName = "@" + fullName + fullName.length;
 console.log(useName);










// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// String Methods from paid course of Shradha Khapra ---Zoom Learning----- 
// trim()
// toUpperCase()
// toLowerCase()
// indexOf()
// slice()
// replace()
// repeat()
