// For Loop: Print "This is for loop" 20 times
console.log('PRINT DATA')

for (let i=1; i<=20; i++) {
    console.log("This is for loop")
}

// For loop: Print Numbers from 1 to 10
console.log('PRINT NUMBERS FROM 1 TO 20')

for (let num=1; num<=10; num++) {
    console.log('Print 1 to 10 munebrs:', num)
}

// For loop: Print even numbers from 0 to 20
console.log('PRINT EVEN NUMBERS FROM 0 TO 20')

for ( let evenNum = 0; evenNum <= 20; evenNum++) {
    if (evenNum%2 === 0) {
        console.log('Even Numbers:', evenNum)
    }
};

for (let i = 2; i <=20; i += 2) {
    console.log(i)
}


//write a table of 4 by using for loop
console.log('TABLE OF 4 USING FOR LOOP')

for (let i = 4; i <= 40; i = i+4) {
    console.log("4 x ${} = " + i)
};

//write a table of 2 by using for loop
console.log('TABLE OF 2 USING FOR LOOP')

for(let tab = 2; tab <=20; tab = tab+2) {

    console.log('2 x 1 =', tab)
}

// HOW TO CALCULATE A LARGE NUMBER USING FOR LOOP
console.log('HOW TO CALCULATE A LARGE NUMBER USING FOR LOOP')

let num1 = 203;
let num2 = 50;

let num3 = num1 * num2;
console.log("Multiply of num1 and num2 is:", num3)

// Now try to rite a table of 10150 using for loop
console.log('TRY TO WRITE A TABLE OF A LARGE NUMBER LIKE 10150')

for (let i = 10150; i <= 101500; i = i+10150 ) {
    console.log('multiply of large value:', i)
}


