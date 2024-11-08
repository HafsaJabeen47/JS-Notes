// Important Note: query selector se jab hum html k kisi element ko as element select krty hen to yaad rakhen query selector hamessha pehly waly ko kselect krt ahai. suppose agr hamry page pe button element 5 hen mtlb 5 button hai or agr hum query selector se jab button element ko select kren gen to query selector sab se pehly button ko select kry ga. agr hum ne kisi dusry ya 3sry ya end waly button per kam krna hai to us k luye hamen buttons ko id ya class assign krni pry gi phr us ki madad se hum js me html ko access kr paen gen

let button = document.querySelector('button');
let div = document.querySelector('div');
let age = document.querySelector('input');
let reset = document.querySelector('#reset');


button.onclick = () =>{
    let months = age.value * 12;
    div.style.visibility = 'visible';
    reset.style.visibility = 'visible';

    div.innerText = `Age in Months: ${months}`;
}

reset.onclick = ()=>{
    div.innerText = '';
    div.style.visibility = 'hidden';
    age.value = '1';
    reset.style.visibility = 'hidden';
}


// Assignment
// crruncy converter
// cecius to foranheat yhen forhanheat to celcius
// miles to kilometer then kilometer to miles
// pkr to dollar / rayal / pound