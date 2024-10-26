// How to apply CSS on HTML elements using JS
document.getElementById('apply-css').style.color = 'green';
document.getElementById('apply-css').style.backgroundColor = 'pink';

// How to change text on HTML elements using JS 'innerHTML'
document.getElementById('inner-html').innerHTML = 'I have changed this text through JS you can see the difference which i wrote above.'

// I tried to change the element through JS .innerHTML it replaced the above text which is written in line 6
document.getElementById('inner-html').innerHTML = "<h3> This is h3 heading. </h3>";

// How to change only text content using jS
// i didn't add text in html tag 27 line that is blank i just add text here and it is working and displaying.
document.getElementById('text-content').textContent = 'I am changing the text using textContent by JS';


// Onclick Button

let username;

document.getElementById('mySubmit').onclick = function(){
    username = document.getElementById('myText').value;
    document.getElementById('myh1').textContent = `Hello ${username}`
}

// Onclick another example

let setDate;

document.getElementById('click').onclick = function(){
    setDate = document.getElementById('time').innerHTML = date();
}


















// JS can change the content which used in HTML
// innerHTML works like to create a new element through JS.
document.getElementById("content").innerHTML = "I changed the content using JS."

// textContent works only text and it does not consider html element.
document.getElementById("page1").textContent = 'I used textContent to apply text';

// how to apply css in JS
document.getElementById('content').style.fontSize = "28px";

// Onclick Button 



