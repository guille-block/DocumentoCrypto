// import {apikey} from "../DocumentoCrypto/apikey.js";

const boton = document.querySelectorAll('.buttonGenerico, .buttonCorrelaciones')
const liBox = document.querySelectorAll('.box');


var test = document.getElementById('3');
console.log(test)
console.log(boton[1])




//boton[0].onclick = console.log(9)

let actividad = false

var arrayActividad = new Array(0)

boton.forEach(item => {
    arrayActividad.push(false)
});

console.log(Array.from(arrayActividad))


const div = document.querySelectorAll('.botonAppend')


const clicker = (i) => {
    if(!arrayActividad[i]) {
        console.log(i)
        div[i].style.display = 'block'
        boton[i].style.margin = 'auto'
        boton[i].style.display = 'block'
        liBox[i].style.width ='100%';
        arrayActividad[i] = true;
        console.log('abierto')
    } else {
        console.log(i)
        div[i].style.display = 'none'
        boton[i].style.marginLeft = '0%'
        liBox[i].style.width = 'auto';
        arrayActividad[i] = false;
        console.log('cerrado')
    }

}




const taLabels = Array.from(document.querySelectorAll('.taLabel'));



taLabels.forEach(item => chooseColor(item));

function chooseColor(i){
    if(i.textContent == "Neutral"){
        i.style.color = 'orange';
    }else if(i.textContent == "Bearish"){
        i.style.color = 'red';
    } else{
        i.style.color = 'green';
    }
}
/*
function addListenerMulti(element, eventNames, listener) {
    var events = eventNames.split(' ');
    for (var i=0, iLen=events.length; i<iLen; i++) {
      element.addEventListener(events[i], listener, false);
    }
  }
  
  
for( let i = 0; i < boton.length; i++) {
      let botonInterno = boton[i]
      addListenerMulti(botonInterno, 'focus click touchstart"', function(){
          div[i].style.display = 'block'
          botonInterno.style.margin = 'auto'
          botonInterno.style.display = 'block'
          liBox[i].style.width ='100%';

      });
    // botonInterno.addEventListener('focus', ()=> {
    // })
    addListenerMulti(botonInterno, 'blur touchleave touchcancel', function(){
        div[i].style.display = 'none'
        botonInterno.style.marginLeft = '0%'
        liBox[i].style.width = 'auto';
    
    });
    //  botonInterno.addEventListener('blur touchcancel touchleave', () => {
    //    })
}
*/

boton.forEach((botonn, index)=>{
    console.log()
	botonn.addEventListener("click", function() {
        clicker(index)
    }, false);
 // Prints the index at which the loop is currently at
});


// token name added to aditional analysis
const tokenNames = document.querySelectorAll('.tokenName');
const spanTokenNames = document.querySelectorAll('.spanTokenName');

for(let i=0; i<tokenNames.length;i++){
    spanTokenNames[i].innerText = tokenNames[i].textContent;
}

