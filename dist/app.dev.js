"use strict";

// import {apikey} from "../DocumentoCrypto/apikey.js";
var boton = document.querySelectorAll('.buttonGenerico, .buttonCorrelaciones');
var liBox = document.querySelectorAll('.box');
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

var _loop = function _loop(i) {
  var botonInterno = boton[i];
  botonInterno.addEventListener('focus', function () {
    div[i].style.display = 'block';
    botonInterno.style.margin = 'auto';
    botonInterno.style.display = 'block';
    liBox[i].style.width = '100%';
  });
  botonInterno.addEventListener('blur', function () {
    div[i].style.display = 'none';
    botonInterno.style.marginLeft = '0%';
    liBox[i].style.width = 'auto';
  });
};

for (var i = 0; i < boton.length; i++) {
  _loop(i);
} // token name added to aditional analysis


var tokenNames = document.querySelectorAll('.tokenName');
var spanTokenNames = document.querySelectorAll('.spanTokenName');

for (var _i = 0; _i < tokenNames.length; _i++) {
  spanTokenNames[_i].innerText = tokenNames[_i].textContent;
}