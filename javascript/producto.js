
// Productos galeria

let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");


// Funcion que carga la info 

function cargar(item) {
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "60%";
    seleccion.style.opacity = "1";
    

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML = item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Descripcion del modelo";

    precioSeleccionado.innerHTML = item.getElementsByTagName("span")[0].innerHTML;
}

function quitarBordes() {
    var items = document.getElementsByClassName("item");
    for(i = 0; i < items.length; i++) {
        items[i].style.border = "none";
    }
}

function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0";
    seleccion.style.opacity = "0";
    quitarBordes();
}



// Filtrar por nombre 

const input = document.querySelector(".buscar-input");

input.addEventListener("keyup", function(e){
    const celulares = document.querySelectorAll( '.item' );
    let inputText = e.target.value;
    let regularExp = new RegExp( inputText, "i" );

    for ( let i = 0; i < celulares.length; i++ )
    {
        let value = celulares[i];
        console.log(value);
        if ( regularExp.test( value.textContent ) ) 
        {
            value.classList.remove('hide');
        }
        else 
        {
            value.classList.add( 'hide' )
        }
    }
});



  
