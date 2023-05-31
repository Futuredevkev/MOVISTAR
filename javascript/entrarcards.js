// Entrar a las cards

const BotonBusqueda = document.querySelectorAll('.boton-busqueda');

BotonBusqueda.forEach((item) =>{
    item.onclick = (evento)=>{
     const link = evento.currentTarget.dataset.link
     window.open(link);
  }
});
