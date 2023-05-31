

/* Preload Animation */
window.addEventListener("load", () => {
    setTimeout(() => {
        const contenedor_loader = document.querySelector(".contenedor_loader");
        contenedor_loader.style.opacity = 0;
        contenedor_loader.style.visibility = "hidden";   
    },4000);
});