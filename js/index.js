//SCROLL
const scrollButton = document.querySelector('.scroll-button');

scrollButton.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});
//CARRUSEL

//CARRUSEL DE IMAGENES
 const carrusel = document.querySelector('.carrusel');
const carruselContenedor = document.querySelector('.carrusel-contenedor');
const carruselItems = carruselContenedor.querySelectorAll('.carrusel-item');
const anchoCarrusel = carrusel.offsetWidth;

let indice = 0;

setInterval(() => {
  indice++;
  if (indice > carruselItems.length - 1) {
    indice = 0;
  }
  carruselContenedor.style.transform = `translateX(-${anchoCarrusel * indice}px)`;
}, 5000);
 //CARRUSEL DE IMAGENES




