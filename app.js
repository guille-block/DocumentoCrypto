const boton = document.querySelectorAll('.buttonGenerico')
const div = document.querySelectorAll('.botonAppend')

const taLabels = Array.from(document.querySelectorAll('.taLabel'));

console.log(taLabels);


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


for( let i = 0; i <= boton.length; i++) {
    let botonInterno = boton[i]
    botonInterno.addEventListener('focus', ()=> {
        div[i].style.display = 'block'
        botonInterno.style.margin = 'auto'
        botonInterno.style.display = 'block'
    })

    // botonInterno.addEventListener('blur', () => {
    //     div[i].style.display = 'none'
    //     botonInterno.style.marginLeft = '0%'
    // })
}
