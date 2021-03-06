const boton = document.querySelectorAll('.buttonGenerico, .buttonCorrelaciones')


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


for( let i = 0; i <= boton.length; i++) {
    let botonInterno = boton[i]
    botonInterno.addEventListener('focus', ()=> {
        div[i].style.display = 'block'
        botonInterno.style.margin = 'auto'
        botonInterno.style.display = 'block'
    })

      botonInterno.addEventListener('blur', () => {
          div[i].style.display = 'none'
          botonInterno.style.marginLeft = '0%'
      })
}

