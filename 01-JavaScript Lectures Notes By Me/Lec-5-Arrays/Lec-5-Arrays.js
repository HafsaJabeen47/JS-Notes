// INSTRUCTIONS ABOUT ARRAYS
// Arrays used to save same type of information like students marks
// In arrays position matter krti hai or ye position index hi hoti hai
// Arrays has single value but object has key:value pair
// Array me hum multiple collection of item ko aik single nam dy kr usy store krwa skty hen jab k hum object me her item k lye hum alg se key dety thy but array me esa nahi hota.
// NOTE: Arrays apny ap me kuch nahi hoty bal k ye khud apny ap me aik object type hoty hen or arrays me object ki tran key:value ki bjay index:value hoti hai
// IMPORTANT NOTE: In javaScript strings are immutable can't changed and arrays are muteable can be changed Mean hm arrays me particular index ki value ko change kr skty hen or jab k strings me hum particular index ki value ko change nahi kr skty. 




// ARRAYS PROPERTIES NOTES:
// 1: arrayName.length
// 2: Array Indices: Indices is a plural form of Index we can access individual item by using index
// 3: We can change existing value from an array like this: array[3] = 66;
// 4: Looping over an Array NOTE: array ki looping krty hvy for loop me hum kabi b stopping condition me equal to assign nahi kren gen bal k hum apny array ki length ko define krty hen idx < arrayName.length
// 5: WE PREFER ---FOR OF LOOP--- to print arrays by looping
// 6: Array Methods
// ---1: push()   ---add at the end
// ---2: pop()    ---delete from end
// ---3: toString() ---convert array into string
// ---4: concat()  ---joins two arrays
// ---5: unshift() ---add in start
// ---6: shift()   ---delete from start
// ---7: slice()   ---startingIndex, endingIndex
// ---8: splice()  ---startingIndex, deleteCount, Replace
// ---9: map()   ----similar with forEach loop---array k aik aik index pe ja k koi operation krta hai map hamen aik new array return kr k deta hai
// ---10: filter()



// HOW TO CREATE AN SIMPLE ARRAY
let marks = [97, 53, 78, 45, 29, 89];
console.log(marks);
console.log(marks.length);

// WE CAN STORE STRINGS IN AN ARRAY
let foodItems = ["Pasta", "Biryani", "Burger", "salad", "Noodles"];
console.log(foodItems);
// Arrays ki koi type nahi hoti ye apny ap me khud aik object hota hai.
console.log(typeof foodItems);
console.log(typeof foodItems.length);

// 2: Array Indices: We can access individual item using index
let box = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9', 'box10'];
console.log(box[3]);

// 3: We can change existing value from an array like this: array[3] = 66;
let students = ["Sana", "Maria", "Fiza", "Pari"];
console.log(students)
students[2] = "Anam";
console.log(students);

// 4: LOOPING OVER AN ARRAY ------FOR LOOP--------
let fruitsName = ["apple", "mango", "orange", "banana", "peach", "pear"];

for (let idx = 0; idx < fruitsName.length; idx++){
    console.log(fruitsName[idx]);
}
fruitsName[3] = "PineApple";
console.log(fruitsName);

// 5: FOR OF LOOP PREFERED FOR ARRAYS TO PRINT INDEX VALUES
let color = ["red", "blue", "pink", "purple", "yellow", "black", "white"];

for (let el of color){
    console.log(el.toUpperCase());
};

// PRACTICE QUESTION: 01 OF ARRAY 

let studentsMarks = [85, 97, 44, 37, 76, 60];

let sum = 85 + 97 + 44 + 37 + 76 + 60;

// let average = sum/6;
let average = sum / studentsMarks.length;

console.log(average);

// PRACTICE QUESTION: 02 OF ARRAY 
let items = [250, 645, 300, 900, 50];

let idx = 0;
for (let val of items) {
//    console.log(`value at index ${idx} = ${val}`);
   let offer = val / 10;
   items[idx] = items[idx] - offer;
   console.log(`Final price after offer is ${items[idx]}`);
   idx++;
};
console.log(items);

// -----------ARRAYS METHODS------------
// 1: push() add to end: if we have to add new data at the end of an array we use push() method and enter the new data inside it. push method existing array k ander hi change krta hai.
let veggies = ["potato", "peace", "onion", "garlic", "chilli"];
console.log(veggies.push("Mint", "capsicum", "cucumber"));
console.log(veggies)

// 2: pop() delete from end & return---pop method b original array k ander hi change krta hai
let food = ["paneer", "burger", "pizza", "tomato", "radish", "guava"];
console.log(food);

let deletedFood = food.pop();
console.log(food);
console.log("deleted item is", deletedFood);


// 3: toString() it converts array to string--ye original array k ander change nahi krta bal k aik new array ko string me convert krta hai.
let studentsData = ["Name", "Age", "class", "Address", "Department", "subject"];
console.log(studentsData);
console.log(studentsData.toString());
console.log(studentsData);

// 4: concat() it joins multiple arrys and return results ye b original arrays k ander change nahi krta bal k hamen new result return krta hai.
let data1 = ["stories", "essays", "lessons"];
let data2 = ["alphabets", "phrases", "oral"];
let content = ["books", "novals", "albums"];

let allData = data1.concat(data2, content);
console.log(allData);

// 5: unshift() it works like push method and it adds the data in start.
let favFruits = ["apple", "mango", "orange", "pineapple"];
console.log(favFruits);
favFruits.unshift("strawberry");
console.log(favFruits);

// 6: shift() it deletes data from start and return. it works like pop method
let numberOfStu = ["english", "mathes", "social studies", "chemisry"];

console.log(numberOfStu)
let val = numberOfStu.shift();
console.log(val);

// 7: slice() it returns the piece of array and it works the same as it do in strings NOTE:slice method original array k ander change nai krta
let netwrork = ["jazz", "warid", "zong", "telenor", "ptcl"];

console.log(netwrork);
console.log(netwrork.slice(1, 4));

// 8: splice() --change original array (add, remove, replace)
// syntax of splice method splice(startIdx, delCount, newEl1...)
// NOTE: agr hm ne kisi value ko delete krna hai to wo b usi index se count ho ga jis index se hm ne starting point lia tha.
let diffSplice = ["fruits", "vegetables", "fast food", "drinks", "deserts", "sweets", "chinese"];

console.log(diffSplice);
console.log(diffSplice.splice(3, 2, "101", "105"));
console.log(diffSplice);
// NOTE: add new value without removing existing value like this
console.log(diffSplice.splice(1, 0, "Added new value without removing existing value"));
console.log(diffSplice);

// PRACTICE QUESTION FOR ARRAYS METHOD
let companies = ["Bloomberg", "Microsoft", " Uber", "Google", " IBM", "Netflix"];

// console.log(companies);
// companies.shift();
// console.log(companies);
companies.splice(2, 1, "Ola");
// companies.push("Amazon");
console.log(companies);


// 9: map() --



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Arrays method by shrdha khapra paind course
// kisi specific array ko get krny k lye hunm [index] ka use krty hen to us k sath stirng k character ko b get kr skty hen if i am not wrong. mjy ye point abi clear nahi hai inf0[0][1]
// Arrays are mutable but strings are immutable
// push()add to end
// pop()delete from end and return it
// ushift()add to start
// shift()delete from start & return it



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// New Work about today: date: 15 November 2024.
// sort()like A to b then C then D and so on but it not works in numbers further i have to learn more about sort
// indexOf()is me hum us value ko enter krty hen then value e uska index get hota hai.




// refrences:mtalb adress:refrence variable jab b koi new array banta hai to wo refrence variable kehlata hai
// new memory allocate hoti hai

// adress compare hoty hen is lye result false ata dono ka adress diffrent hota hai
// constnat arrays: explore this 
// nested array: [ [1,2,3], [4,5,6], [7,8,9]] this is the way to write nested array in main array
// 




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Array.filter()
// Array.map()





// youtube interview questions:
console.log(!'hello');
console.log(+false);


let arr = [3,4,5,6,7,8];
arr[10] = 100;
console.log(arr);

let xyz = 1 + abc;
var abc = 100;
console.log(xyz); //answer is: abc is not defined.


let arrr = [89, 45, 67, 2, 56, 22, 1, 12];

let newRe = Math.min(arrr);

// console.log(newRe)










