
/*PRIMERA PARTE_DIVS CON COLORES Y TAMAÑOS*/
function diseno_caja(id, color){
    elemento = document.getElementById(id)
    elemento.style.backgroundColor = color;
    elemento.style.width = "200px";
    elemento.style.height = "200px"; 
    elemento.style.marginTop = "3px";
}

diseno_caja('c1','blue')
diseno_caja('c2','red')
diseno_caja('c3','green')
diseno_caja('c4','yellow')

/*SEGUNDA PARTE_DIVS CAMBIAN A COLOR NEGRO AL SER CLICKEADOS*/

function cambio_color_negro(caja){
    caja.style.backgroundColor = 'black'
}

let caja1 = document.getElementById('c1');
caja1.addEventListener('click', function() {
    cambio_color_negro(caja1)
})

let caja2 = document.getElementById('c2');
caja2.addEventListener('click', function() {
    cambio_color_negro(caja2)
})

let caja3 = document.getElementById('c3');
caja3.addEventListener('click', function() {
    cambio_color_negro(caja3)
})

let caja4 = document.getElementById('c4');
caja4.addEventListener('click', function() {
    cambio_color_negro(caja4)
})

