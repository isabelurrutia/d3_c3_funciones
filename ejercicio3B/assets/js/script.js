/*DISEÑO DEL DIV*/
elemento = document.getElementById('key')
elemento.style.backgroundColor = 'white';
elemento.style.width = "200px";
elemento.style.height = "200px"; 
elemento.style.border = "2px solid black";

/*PRIMERA PARTE CAMBIA CON A-S-D*/
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        elemento.style.backgroundColor = 'pink';
    } else if (event.key === 's') {
        elemento.style.backgroundColor = 'orange';
    } else if (event.key === 'd') {
        elemento.style.backgroundColor = 'skyblue';
    }})

/*SEGUNDA PARTE CREA DIV Y CAMBIA CON Q-W-E*/
function crear_div(){
    elemento2 = document.getElementById('key2')
    elemento2.style.width = "200px";
    elemento2.style.height = "200px";
    elemento2.style.marginTop = "5px";  
    elemento2.style.border = "2px solid black"; 
}
document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        crear_div()
        elemento2.style.backgroundColor = 'purple';
    } else if (event.key === 'w') {
        crear_div()
        elemento2.style.backgroundColor = 'grey';
    } else if (event.key === 'e') {
        crear_div()
        elemento2.style.backgroundColor = 'brown';
    }})
