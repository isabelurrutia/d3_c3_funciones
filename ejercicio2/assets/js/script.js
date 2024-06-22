
function pintar(color='green'){
    ele.style.backgroundColor = color;
    }

const ele = document.getElementById("ele");
ele.addEventListener("click", function(){
        pintar('yellow');
    });
