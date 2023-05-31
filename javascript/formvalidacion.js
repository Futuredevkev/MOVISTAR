// Form validacion 

const formulario = document.querySelector("#form");
const input = formulario.querySelectorAll("input");
const textarea = document.querySelector("textarea");
const buttonFormSUbmit = document.querySelector("#butonSubmit");
const diverror = document.querySelector("#divError");

console.log([formulario,input,textarea, diverror]);

const loadvalidatemessage = (exito) => {
  const message = `
  <div class="validatemessage">
     <p><i class="bi-exclamation-triangle"></i>Debes completar todos los campos</p>
     </div>
     `;
     diverror.innerHTML = message;
     setTimeout(() => {
       diverror.innerHTML = "";
      }, 1500);
      
      if (exito == true) {
        const message = `
        <div class="correctmessage">
        <p><i class="bi bi-check-lg"></i>Enviado correctamente</p>
        </div>
        `;
        diverror.innerHTML = message;
    setTimeout(() => {
      diverror.innerHTML = "";
    }, 2000);
  }
};

function boton(e) {
    if (input[0].value == "" || input[1].value == "" || input[2].value === "" || input[3].value === "" || textarea.value == "") {
        loadvalidatemessage();
      } else {
        diverror.innerHTML = "";
        setTimeout(() => {
          input.forEach((text) => (text.value = ""));
          textarea.value = "";
          loadvalidatemessage(true);
        }, 400);
      }
}


const form = formulario.querySelector('form');

