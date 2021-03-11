// import {apikey} from "../DocumentoCrypto/apikey.js";

const boton = document.querySelectorAll('.buttonGenerico, .buttonCorrelaciones')
const liBox = document.querySelectorAll('.box');

const div = document.querySelectorAll('.botonAppend')

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

function addListenerMulti(element, eventNames, listener) {
    var events = eventNames.split(' ');
    for (var i=0, iLen=events.length; i<iLen; i++) {
      element.addEventListener(events[i], listener, false);
    }
  }
  
  
  for( let i = 0; i < boton.length; i++) {
      let botonInterno = boton[i]
      addListenerMulti(botonInterno, 'focus click', function(){
          div[i].style.display = 'block'
          botonInterno.style.margin = 'auto'
          botonInterno.style.display = 'block'
          liBox[i].style.width ='100%';

      });
    // botonInterno.addEventListener('focus', ()=> {
    // })
    addListenerMulti(botonInterno, 'blur touchcancel touchleave', function(){
        div[i].style.display = 'none'
        botonInterno.style.marginLeft = '0%'
        liBox[i].style.width = 'auto';
    
    });
    //  botonInterno.addEventListener('blur touchcancel touchleave', () => {
    //    })
}

// token name added to aditional analysis
const tokenNames = document.querySelectorAll('.tokenName');
const spanTokenNames = document.querySelectorAll('.spanTokenName');

for(let i=0; i<tokenNames.length;i++){
    spanTokenNames[i].innerText = tokenNames[i].textContent;
}

