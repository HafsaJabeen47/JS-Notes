// FOR EACH LOOP BY YAHOO BABA
// NOTE: forEach loop used in array
// forEach() array k ander inbuild method hota hai. a.forEach();
// a.forEach(); hum for each loop me function bnaty hen or hum koi external function bna kr usy b forEach loop me call krwa skty hen. for example:
let a = ['studentOne', 'student2', 'student3', 'student4'];
a.forEach(function(){
// is treqy se hum forEach me function bnaty hen. or isy inbuild function b keh skty hen.
// jab hum forEach k ander hi functionbnaty hen to us surat me hamen function ko koi name denen ki zrurt nahi hoti.
});



// LET'S TRY HOW FOREACH LOOP WORKS WITH EXAMPLE:     NOTE: IN BUILD FUNCTION IN FOREACH LOOP EXAMPLE
let arr = ['Rahul', 'Karan', 'Aman', 'Neha'];

arr.forEach(function(value, index){
    document.write( index + ' : ' + value + '<br>');
});

// Note: forEach jab array ki hr value k lye run ho ga to us k lye hamen value ko print krwany k lye hamen value ko aik variable me store krwaty hen is lye hum ne forEach me jo function bnaya us k ander value name se aik parameter/variable pass kren gen or phr us k through hum array ki hr value ko print krwa saken gen. jese mene opar value ko as parameter pass kia hai 
// Value ko print krwany k lye pehly usy parameter me pass krty hen then usy document.write(value) me b pass krna hota hai. jesy mene opar kia.
// ab agr hamen in value k sath in k index ko b print krwana hai to us k lye hamen function me aik or variable bnana pry ga jesy mene bnaya index name se avriable. or phr usy b document.write me call krwaen gen jesy value ko kia tha.
// ye jo opar array hai is me hum neinbuild function bnaya hai ab isi function ko external bna kr forEach me call kesy krwaty hen uska treeqa nechy hai. LET'S GO AND SEE HOW IT WORKS:

// HOW FOR EACH LOOP WORKS USING EXTERNAL FUNCTION:
let arra = ['Rahul', 'Karan', 'Aman', 'Neha'];

arra.forEach(arrFun); // here i called external function in forEach loop to print array elements.

// now lets make an external function
function arrFun(value, index){
    document.write(index + ' :: ' + value + '<br>')
} // now we will call this function in forEach loop.

// NOTE: double colon is lye add kia ta k yaad rahy double colon wala external function use kia hai or result dono ka same hi aya hai.

// THIS IS ABOUT FOR EACH LOOP BY YAHOO BABA FOR EACH LOOP TUTORIAL: opar foreach k bary jo instructions hen wo yahoo baba ki video ko follow kia hai.

