// menu hamburguesa

document.querySelector(".bars__menu").addEventListener("click", animateBars);

let line1__bars = document.querySelector(".line1__bars-menu");
  let line2__bars = document.querySelector(".line2__bars-menu");
 let line3__bars = document.querySelector(".line3__bars-menu");
 
 function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
   line3__bars.classList.toggle("activeline3__bars-menu"); 
   
   const nav = document.querySelector('.conteiner-nav');
   nav.classList.toggle("nav-open");
   const body = document.querySelector('body');
   const awesomeIframe = document.querySelector('#tidio-chat');
   
   if(line1__bars.classList.contains("activeline1__bars-menu")){
       body.style.overflow = 'hidden'
       awesomeIframe.style.display = "none";
   }  else {
       body.style.overflow = 'auto'
       awesomeIframe.style.display = "flex";
   }
   
   
}
