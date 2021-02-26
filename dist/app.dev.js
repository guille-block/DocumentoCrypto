"use strict";

var boton = document.querySelectorAll('.buttonGenerico');
var div = document.querySelectorAll('.botonAppend');
var taLabels = Array.from(document.querySelectorAll('.taLabel'));
console.log(taLabels);
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
  }); // botonInterno.addEventListener('blur', () => {
  //     div[i].style.display = 'none'
  //     botonInterno.style.marginLeft = '0%'
  // })
};

for (var i = 0; i <= boton.length; i++) {
  _loop(i);
}