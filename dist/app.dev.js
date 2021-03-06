"use strict";

var boton = document.querySelectorAll('.buttonGenerico, .buttonCorrelaciones');
var div = document.querySelectorAll('.botonAppend');
var taLabels = Array.from(document.querySelectorAll('.taLabel'));
taLabels.forEach(function (item) {
  return chooseColor(item);
});

function chooseColor(i) {
  if (i.textContent == "Neutral") {
    i.style.color = 'orange';
  } else if (i.textContent == "Bearish") {
    i.style.color = 'red';
  } else {
    i.style.color = 'green';
  }
}
/*
// token name added to aditional analysis
const tokenNames = document.querySelectorAll('.tokenName');
const spanTokenNames = document.querySelectorAll('.spanTokenName');
tokenNames.forEach(item => addName(item));

function addName(tokenName){
    // for(let i=0; i<=tokenNames.length;i++){
    //     console.log(i.textContent);
        for(let j=0 ; j<= spanTokenNames.length; j++){
            j.innerText = tokenName.textContent;
            console.log(j);
        }
    // }

}*/


var _loop = function _loop(i) {
  var botonInterno = boton[i];
  botonInterno.addEventListener('focus', function () {
    div[i].style.display = 'block';
    botonInterno.style.margin = 'auto';
    botonInterno.style.display = 'block';
  });
  botonInterno.addEventListener('blur', function () {
    div[i].style.display = 'none';
    botonInterno.style.marginLeft = '0%';
  });
};

for (var i = 0; i <= boton.length; i++) {
  _loop(i);
}