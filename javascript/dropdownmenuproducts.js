document.querySelector(".dropdown-products").addEventListener("click", function(){
        document.querySelector(".dropdown-products ul").classList.toggle("show");
});

const selectUL = document.querySelector("#ul_buscar");
const celulares = [...document.querySelectorAll( '.item' )];

selectUL.querySelectorAll('li').forEach((option)=>{
        option.addEventListener('click', (e)=>{
                const filtradoDeCelulares = celulares.filter( (celular) => celular.textContent.includes(option.textContent))
                celulares.forEach((celular) => celular.classList.add('hide'));
                filtradoDeCelulares.map((celular) => celular.classList.remove('hide'));
        });
})



