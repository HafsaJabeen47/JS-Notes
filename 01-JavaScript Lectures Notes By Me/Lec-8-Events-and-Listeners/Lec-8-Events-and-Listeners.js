// JavaScript Events by Code-help with Love Babber

// 01: EVENTS are just announcements by browser. (e.g) click, double click, key press, scroll and so on.
// her event k sath aik action attached hota hai mslan click krny per kya action hona, double click krny per aik new page open hona and so on.

// 02: EVENT TARGET: jis particular element per apka event recieve hva hai usy event target kehty hen. for example hm ne html me aik button create kia or koi user us button pe click krta hai to ye specific button hmara event target kehlay ga. or click krna event announcement krehlay ga. isi tran hmary HTML me jitny b elements hen unhen hum event target keh skty hen.

// 03: EVENT LISTENER: button per click hony k bad jo action perform ho ga wo action hum aik location per likhty hen or us location ko hum event listener kehty hen. In simple words event-listener k ander hmara wo kam likha hota hai jo hum ne button pe click hony k bad krwana hota hai. mslan video play ho ga, video pause and page close, picture like and all that.

// 04: REMOVE EVENT LISTENER: target element k bad "removeEvenetListener("event-type, action/function")" is ki example nechy alg se practice ki hai.

// 05: SYNTAX OF EVENTS: How to apply events in proper way?
// <event-target>.addEventListener( <event-type>, <function/action> );
// For-example
let para = document.getElementById('myPara'); //yahan hum ne html se element to access kia.

function changeText() { //jo kam hm ne click hony k bad show krwana hai wo is function k ander likha hai
    let para = document.getElementById('myPara');
    para.innerText = "I am an Event-Listener.";
}

para.addEventListener('click', changeText); //yahan hm ne event ko apply kia hai. "para" hmara event target hai phe us k bad dot lga kr hun me add event-listener kia or phr us k ander hm ne apny event announcement ki type mention krni hai ab yahan mene "click" type mentioned ki hai phr comma lga ker hm ne apny us function ko yahan call krna hai jo hum ne opr function bnaya tha jis k ander hum ne apna action likha tha k click hone per kya ction perform ho ga.

// ANOTHER TRY TO LEARN EVENTS BY ME:
let button = document.getElementById('btn');

function btnFunc() {
    let button = document.getElementById('btn'); //why button is blured here?
    alert("To read more abut events just click on OK")
    prompt("Enter your desired topic here about Events.")
}

button.addEventListener('click', btnFunc); //This worked and shown result.

// 04: REMOVE EVENT LISTENER: target element k bad "removeEvenetListener("event-type, action/function")"
let text = document.getElementById('remove');

function removeText() {
    let text = document.getElementById('remove');
    text.innerText = "This is the right way to remove event listener using JavaScript."
}

// text.addEventListener('click', removeText); // is se addEventListener apply ho raha hai. or click krny per text b change ho raha hai.
text.removeEventListener('click', removeText); // is se Event-Listener REMOVE ho raha hai. or click b nahi ho raha.


// 06: LIFE CYCLE OF EVENTS / PHASES OF EVENTS: DOM hierarchy k ander EVENT kis tran travel krta hai?
// agr hum ne HTML me aik parent div k ander different childs bnay hen to phr un me se kisi aik child per event lgany k lye hum EVENt k PHASES ko follow krty hen like is me 3 main steps hoty hen:
// -1) Capturing Phase          -2) At-Target Phase          -3) Bubbling Phase
// -1) Capturing Phase: Click event DOM me hierarchy wise top to down phase by phase travel krta hai. or phr wo us particular element per pohnchta hai jahan event apply/target kia hota hai.

// -2) At-Target-Phase: jab hum targeted element per pohanch jaty hen usy at-target-phase kehty hen.

// -3) Bubbling Phase: jab target element se wapis opar jaty hen parent by parent to usy bubbling phase kehty hen. tab tak wapis opar jaty jaen gen jab tak root element tak naa pohanch jaen.

// is 06: waly main point ko q parha hai isi lecture me agy discuss kren gen abi filhal discuss nahi kren gen.

// IMPORTANT NOTE: AddEventListener() by default "Bubbling Phase" me perform ho raha hota hai. or agr hum ne add event listener ko capturing phase me krna ho to us k lye third value true pass krni hoti hai jo k add event listener me "(type, listener/function/action, true)" me true value dety hen.


// 07: EVENT OBJECT: ye point mjy clear nahi hva. 25 mints se start ho raha shyed love babber ki events wali video me.


// 08: DEFAULT ACTION: mtlb kisi element per click krny se wo hamen kisi or page per ly jay. For example anchor tag ka default behaviour hamen click krny per kisi dusri website ya page per ly jata hai. 

// NOTE: agr hum ksi element k opar us k default behaviour ko stop krna chahty hon to us k lye aik function hota hai or usy "preventDefault()" kehty hen.
// For example:
let anchorElement = document.getElementById('tag'); //hm ne anchor tag ko JS me access kia by Id

function anchorFun(event) {
    let anchorElement = document.getElementById('tag');
    event.preventDefault(); //is preventDefault() se hmary anchor tag ka behaviour change hva.
    anchorElement.innerText = "Now anchor tag is not working because we have stopped the default behaviour of anchor tag and we are here not moving to another link. "
}
anchorElement.addEventListener('click', anchorFun); //used add event listener here.



// 09: AVOIDING TOO MANY LISTENER --- INTERVIEW ASKED QUESTION
// kr to lia but points abi clear nahi hvy
// ye jo for loop lga kr kia hai iski smaj nahi i thek se lekn hum isy aik or way me b kr skty hen wo ye hai k hum ne in 4 paras ko html me aik parent div me add kia tha so ab hum just us parent div ko target krty hvy isy solve kren gen.
let paras = document.querySelectorAll('p');

function paraFun(event) {
    alert("you have clicked on para: " + event.target.innerText) // target mtlb jis element per click kro gy wo bta dy ga ye k ap ne is element ko click kia hai.
}

for (let i=0; i<=paras.length; i++) {
    // let para = paras[i]; // nechy jo myDiv k zarye kia hai usy implement krny k lye is line ko comment ki hai
    para.addEventListener('click', paraFun)
}

// ye jo for loop lga kr kia hai iski smaj nahi i thek se lekn hum isy aik or way me b kr skty hen wo ye hai k hum ne in 4 paras ko html me aik parent div me add kia tha so ab hum just us parent div ko target krty hvy isy solve kren gen.

let myDiv = document.getElementById('wrapper');

function myParaFun(event) {
    alert("I have clicked on para: " + event.target.innerText )
}

myDiv.addEventListener('click', myParaFun); //this is done good job


// NOTE: is lecture k end pe time 44 mint se mene notes write down nahi kye wo bad me krun gi span se related hai


// THESE NOTES BY SHRADHA KHAPRA LECTURE NO: 08 EVENTS
// EVENT TYPES:
// 1: onclick="" -----used for single click on button-----
// 2: ondblclick=""  -----used for double click on button-----
// 3: onmouseover=""  -----jab hm ksi element k opar hover kerty hen to koi kam perform hota hai-----
// 4: 