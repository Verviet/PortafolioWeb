/* /* /* /* /* /*//////////////////////////////////MENU DESPLEGABLE/////////////////////////////////////////*/

const activadorMenu = document.querySelector('.opciones');
const menuDesplegable = document.querySelector('.menuDesplegable');

function mostrarMenu() {
  menuDesplegable.style.display = 'block';
}

function ocultarMenu() {
  menuDesplegable.style.display = 'none';
}

activadorMenu.addEventListener('click', (event) => {
  event.stopPropagation();

  if (menuDesplegable.style.display === 'none') {
    mostrarMenu();
  } else {
    ocultarMenu();
  }
});

document.addEventListener('click', (event) => {

  // Si el clic no ocurrió dentro del menú desplegable ni en el activador, se oculta el menú
  if (!menuDesplegable.contains(event.target) && event.target !== activadorMenu) {
    ocultarMenu();
  }
});
/*/////////////////////////////////MENU DESPLEGABLE OPCIONES/IDIOMA/////////////////////////////////////////////////*/

let check = document.querySelector('.checkbox');
let check1 = document.querySelector('.checkbox1');

check.addEventListener('change', cambio);
check1.addEventListener('change', cambio);

function cambio() {

  tema = check1.checked;
  idioma = check.checked;

  if(tema === true){
      
    if(idioma === true){

      location.href = "/_En.html";
      document.body.classList.toggle("transition_tema");
    }else{

      location.href = "/_Es.html";
      document.body.classList.toggle("transition_tema");
    }
  
  }else{

    if(idioma === true){

      location.href = "/En.html";
      document.body.classList.toggle("transition_tema");
    }else{

      location.href = "/Index.html";
      document.body.classList.toggle("transition_tema");
    }

  }
}


/*/////////////////////////////////CARRUSEL/////////////////////////////////////////////////*/
const carrusel = document.querySelector(".slider");
let intervalo = null;
let step = 1;

const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft += step;

    if (
      carrusel.scrollLeft >= carrusel.scrollWidth - carrusel.clientWidth ||
      carrusel.scrollLeft <= 0
    ) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});


// Esperar a que todas las imágenes se carguen antes de calcular maxScrollLeft y empezar el slider
window.addEventListener("load", () => {
  start();
});

/*/////////////////////////////////MENSAJE SUBMIT/////////////////////////////////////////////////*/

function onSubmit() {
  // Mostrar un mensaje de confirmación al usuario
      alert("¡Gracias por contactarte conmigo!");

}

function onSubmit2() {
  // Mostrar un mensaje de confirmación al usuario
      alert("Thanks for contacting me!");

}





